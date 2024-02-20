import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazSearchComponent } from './baz-search.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazSearchComponent }])],
  declarations: [BazSearchComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazSearchModule {}
