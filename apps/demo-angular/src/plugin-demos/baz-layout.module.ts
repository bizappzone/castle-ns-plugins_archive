import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazLayoutComponent } from './baz-layout.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazLayoutComponent }])],
  declarations: [BazLayoutComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazLayoutModule {}
