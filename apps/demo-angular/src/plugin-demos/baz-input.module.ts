import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazInputComponent } from './baz-input.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazInputComponent }])],
  declarations: [BazInputComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazInputModule {}
