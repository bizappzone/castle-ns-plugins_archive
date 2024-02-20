import { Component, NgZone } from '@angular/core';
import { DemoSharedBazIcon } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-icon';

@Component({
  selector: 'demo-baz-icon',
  templateUrl: 'baz-icon.component.html',
})
export class BazIconComponent {
  demoShared: DemoSharedBazIcon;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazIcon();
  }
}
