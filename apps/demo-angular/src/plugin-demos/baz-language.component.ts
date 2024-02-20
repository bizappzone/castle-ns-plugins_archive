import { Component, NgZone } from '@angular/core';
import { DemoSharedBazLanguage } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-language';

@Component({
  selector: 'demo-baz-language',
  templateUrl: 'baz-language.component.html',
})
export class BazLanguageComponent {
  demoShared: DemoSharedBazLanguage;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazLanguage();
  }
}
