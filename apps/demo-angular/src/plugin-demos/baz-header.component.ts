import { Component, NgZone } from '@angular/core';
import { DemoSharedBazHeader } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-header';

@Component({
  selector: 'demo-baz-header',
  templateUrl: 'baz-header.component.html',
})
export class BazHeaderComponent {
  demoShared: DemoSharedBazHeader;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazHeader();
  }
}
