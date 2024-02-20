import { Component, NgZone } from '@angular/core';
import { DemoSharedBazSplash } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-splash';

@Component({
  selector: 'demo-baz-splash',
  templateUrl: 'baz-splash.component.html',
})
export class BazSplashComponent {
  demoShared: DemoSharedBazSplash;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazSplash();
  }
}
