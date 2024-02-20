import { Component, NgZone } from '@angular/core';
import { DemoSharedBazText } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-text';

@Component({
  selector: 'demo-baz-text',
  templateUrl: 'baz-text.component.html',
})
export class BazTextComponent {
  demoShared: DemoSharedBazText;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazText();
  }
}
