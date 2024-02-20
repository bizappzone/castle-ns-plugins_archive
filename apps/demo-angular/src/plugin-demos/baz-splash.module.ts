import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazSplashComponent } from './baz-splash.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazSplashComponent }])],
  declarations: [BazSplashComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazSplashModule {}
