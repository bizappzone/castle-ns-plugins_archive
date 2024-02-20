import { Component, NgZone } from '@angular/core';
import { DemoSharedBazTheme } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-theme';

@Component({
  selector: 'demo-baz-theme',
  templateUrl: 'baz-theme.component.html',
})
export class BazThemeComponent {
  demoShared: DemoSharedBazTheme;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazTheme();
  }
}
