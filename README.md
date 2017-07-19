# AFSpawnService
This is an Angular/TypeScript service that will dynamically create components in Angular, 
and attach them to a view.

The current version of this repo supports installing `AFSpawnService` into your project
 via npm, and using the service to init your own components on-the-fly.
  
###To learn more about `AFSpawnService`
If you want to know more about `AFSpawnService`, or you need to understand the need
for the service, please check out my talk about [CAAS: Components As A Service](https://youtu.be/-Hy-i4q8Vtg).
 
 
### How to use AFSpawnService?
####Install
 `npm install --save afspawnservice`
 
####Import
 `import { AFSpawnService } from 'afspawnservice'`
 
####Inject
 In a component/module/service file, you will want to inject the `AFSpawnService`
 ```typescript
@Component({
    selector: 'my-component',
    templateUrl: './my-component.html'
})
export class MyComponent{

    //Inject it into your component or service    
    constructor(private spawnService: AFSpawnService){}

}
```

####Spawning a component
 First import the component class that you want to spawn, and then call the spawn service, and pass in the class to it. 
 
 _Note: that since there was no second parameter provided, the spawned component will be attached to the `document.body`_

```typescript
import { FooComponent } from '...somewhere'

//inside the class
export class AppComponent{
  
    constructor(private spawnService: AFSpawnService){}
    
    // This is where you spawn the FooComponent
    showFooComponent(){
        let context = {title: 'Brocchi Rocks'};
        let spawnRef = this.spawnService.createComponent(FooComponent);
    }
}
```

#### Providing a ViewContainerRef
If you provide a second argument, and that second argument is a `ViewContainerRef`, then `AFSpawnService` will attach
the spawned component to the provided `ViewContainerRef`.
  
In order to get access to a `ViewContainerRef`, you can add a [Template Reference Variable](https://angular.io/guide/template-syntax#template-reference-variables--var-)
to your template on the element that you would like to append the spawned component to. Then in your class, you can get 
access to that part of the template by annotating your class like so:

```typescript
export class AppComponent{  
    // Name your ViewContainerRef
    @ViewChild('temprefvar', {read: ViewContainerRef})
  
    constructor(private spawnService: AFSpawnService){}
    
    // AND NOW PASS THAT IN HERE
    showFooComponent(){
        let context = {title: 'Brocchi Rocks'};
        let spawnRef = this.spawnService.createComponent(FooComponent, this.temprefvar);
    }
}
```
This will attach the spawned component to to view that you provided. 

#### Passing Inputs and Outputs
There are two ways to pass inputs/outputs to the spawned component. The first is by passing a key/value object as the third
parameter to the `createComponent` method. 

The second way is by saving the result of the `createComponent` call, and then call `.next()` on it with a key/value object.
The keys needs to match the names of the inputs and outputs. 

```typescript
//First way                                                     ||| HERE |||                                           
this.spawnService.createComponent(FooComponent, this.temprefvar, {title: "HELLO WORLD"})

//Second Way
let spawnRef = this.spawnService.createComponent(FooComponent, this.temprefvar);
spawnRef.next({title: "HELLO WORLD"});
```
You can call `.next()` on the `spawnReference` as often as you would like. It will continue to update the values on your spawned component. 
Let me know if you have questions.

## If there are any questions, please file an issue. 

---

## Contributing

This Repo is accepting Pull Requests. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.