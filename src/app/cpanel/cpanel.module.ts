import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CpanelRoutingModule } from './cpanel-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CpanelRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CpanelModule { }
