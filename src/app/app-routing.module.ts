import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoggedInLazyLoadGuard } from "./logged-in-lazy-load.guard";

const routes: Routes = [
    { path: "", redirectTo: "/cpanel", pathMatch: "full" },
    { path: "survey", loadChildren: "~/app/survey/survey.module#SurveyModule" },
    { path: "cpanel", loadChildren: "~/app/cpanel/cpanel.module#CpanelModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
