import {
  Injectable, ViewContainerRef, ComponentFactoryResolver, ApplicationRef, Injector,
  ComponentFactory
} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {getSymbolObservable} from "rxjs/symbol/observable";
import {SpawnReference} from "./interfaces/SpawnReference";

@Injectable()
export class AFSpawnService {


  constructor(
    private cfr: ComponentFactoryResolver
    , private appRef: ApplicationRef
    , private injector: Injector
  ) { }

  createComponent(type: any, vcr?: ViewContainerRef, context?: any): SpawnReference{

    // Resolve the factory for incoming component `type`.
    let factory = this.cfr.resolveComponentFactory(type);

    // Create an instance of the component, and add it to the DOM
    let componentRef;
    if(vcr){
      componentRef = vcr.createComponent(factory);
    } else {
      componentRef = factory.create(this.injector);
      this.appRef.attachView(componentRef.hostView);
      document.body.appendChild( (componentRef.hostView as any).rootNodes[0]);
    }

    // Wire up the outputs, and get reference to un-wire outputs
    let unsubs = this._wireOutputs(factory, componentRef, context);

    // Turn the provided inputs into an observable (if not already an observable)
    let observableSymbol = getSymbolObservable(window);
    let context$;
    if(context[observableSymbol]){
      context$ = context;
    } else {
      context$ = new BehaviorSubject(context);
    }

    // Subscribe to the new observable for updated input values
    context$.subscribe(()=>{
      factory.inputs.forEach(i=>{
        if(context[i.propName] !== undefined){
          componentRef.instance[i.propName] = context[i.propName];
        }
      })
    });

    // This function will be returned to the caller, to be called when their context is destroyed
    let detach = ()=>{
      !vcr && this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      unsubs.forEach(u=>u());
    };

    // This function will be returned to the caller, to be called when there are new values for the inputs
    let next = (data)=>{
      if(context$ == context){
        throw `When passing an observable as a context, you cannot call the \`.next\` function from the result. 
                 If you wish to update the values in your context, send the data through the observable that you 
                 passed in as the context.`;
      }
      context$.next(data);
    };

    return {
      detach,
      next,
    }
  }

  // Internal function to add event emitters for each of the provide outputs
  _wireOutputs(factory: ComponentFactory<any>, componentRef: any, context: {[key:string]: any}): Array<Function>{
    let unsubs = [];
    factory.outputs.forEach(o=>{
      if(context[o.propName] && context[o.propName] instanceof Function){
        unsubs.push(componentRef.instance[o.propName].subscribe(context[o.propName]));
      }
    });
    return unsubs;
  }

}
