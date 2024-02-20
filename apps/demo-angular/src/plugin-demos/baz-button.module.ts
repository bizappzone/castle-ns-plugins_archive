import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazButtonComponent } from './baz-button.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazButtonComponent }])],
  declarations: [BazButtonComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazButtonModule {}
