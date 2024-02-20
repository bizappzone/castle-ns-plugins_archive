import { Component, NgZone } from '@angular/core';
import { DemoSharedBazLayout } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-layout';

@Component({
  selector: 'demo-baz-layout',
  templateUrl: 'baz-layout.component.html',
})
export class BazLayoutComponent {
  demoShared: DemoSharedBazLayout;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazLayout();
  }
}
