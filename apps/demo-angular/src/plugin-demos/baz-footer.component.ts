import { Component, NgZone } from '@angular/core';
import { DemoSharedBazFooter } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-footer';

@Component({
  selector: 'demo-baz-footer',
  templateUrl: 'baz-footer.component.html',
})
export class BazFooterComponent {
  demoShared: DemoSharedBazFooter;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazFooter();
  }
}
