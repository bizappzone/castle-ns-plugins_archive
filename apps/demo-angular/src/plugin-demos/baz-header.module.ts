import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazHeaderComponent } from './baz-header.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazHeaderComponent }])],
  declarations: [BazHeaderComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazHeaderModule {}
