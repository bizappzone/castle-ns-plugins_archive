import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazFooterComponent } from './baz-footer.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazFooterComponent }])],
  declarations: [BazFooterComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BazFooterModule {}
