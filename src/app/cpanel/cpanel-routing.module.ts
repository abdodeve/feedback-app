import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { ListComponent } from "./list/list.component" ;

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "second", component: ListComponent },
];


@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CpanelRoutingModule { }
