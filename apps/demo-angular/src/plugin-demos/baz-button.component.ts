import { Component, NgZone } from '@angular/core';
import { DemoSharedBazButton } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-button';

@Component({
  selector: 'demo-baz-button',
  templateUrl: 'baz-button.component.html',
})
export class BazButtonComponent {
  demoShared: DemoSharedBazButton;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazButton();
  }
}
