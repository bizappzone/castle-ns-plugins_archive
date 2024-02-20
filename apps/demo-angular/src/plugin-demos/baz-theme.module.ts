import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazThemeComponent } from './baz-theme.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazThemeComponent }])],
  declarations: [BazThemeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazThemeModule {}
