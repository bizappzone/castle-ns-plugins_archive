import { Component, NgZone } from '@angular/core';
import { DemoSharedBazInput } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-input';

@Component({
  selector: 'demo-baz-input',
  templateUrl: 'baz-input.component.html',
})
export class BazInputComponent {
  demoShared: DemoSharedBazInput;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazInput();
  }
}
