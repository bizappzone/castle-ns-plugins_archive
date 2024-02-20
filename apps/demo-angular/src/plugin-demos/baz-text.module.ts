import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazTextComponent } from './baz-text.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazTextComponent }])],
  declarations: [BazTextComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazTextModule {}
