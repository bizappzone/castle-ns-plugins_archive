import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazIconComponent } from './baz-icon.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazIconComponent }])],
  declarations: [BazIconComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazIconModule {}
