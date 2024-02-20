import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazBodyComponent } from './baz-body.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazBodyComponent }])],
  declarations: [BazBodyComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazBodyModule {}
