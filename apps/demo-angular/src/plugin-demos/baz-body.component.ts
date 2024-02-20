import { Component, NgZone } from '@angular/core';
import { DemoSharedBazBody } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-body';

@Component({
  selector: 'demo-baz-body',
  templateUrl: 'baz-body.component.html',
})
export class BazBodyComponent {
  demoShared: DemoSharedBazBody;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazBody();
  }
}
