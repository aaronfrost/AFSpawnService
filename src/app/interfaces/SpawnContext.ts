import {ViewContainerRef} from "@angular/core";
export interface SpawnContext{
  anchor ?: ViewContainerRef;
  inputs ?: Array<any>;
  outputs ?: Array<any>;
}