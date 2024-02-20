import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazLanguageComponent } from './baz-language.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazLanguageComponent }])],
  declarations: [BazLanguageComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazLanguageModule {}
