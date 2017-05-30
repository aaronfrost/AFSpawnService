import {Injectable, ViewContainerRef, ComponentFactoryResolver, ApplicationRef, Injector} from '@angular/core';

@Injectable()
export class SpawnService {

  constructor(private cfr: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {

  }

  makeAThing(type: any, vcr?: ViewContainerRef): Function{
    let factory = this.cfr.resolveComponentFactory(type);
    let instance;
    if(vcr){
      instance = vcr.createComponent(factory);
    } else {
      instance = factory.create(this.injector);
      this.appRef.attachView(instance.hostView);
      document.body.appendChild( (instance.hostView as any).rootNodes[0]);
    }
    return ()=>{
      !vcr && this.appRef.detachView(instance.hostView);
      instance.destroy();
    };


  }

}
