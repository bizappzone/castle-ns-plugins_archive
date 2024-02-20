import { Component, NgZone } from '@angular/core';
import { DemoSharedBazSearch } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-search';

@Component({
  selector: 'demo-baz-search',
  templateUrl: 'baz-search.component.html',
})
export class BazSearchComponent {
  demoShared: DemoSharedBazSearch;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazSearch();
  }
}
