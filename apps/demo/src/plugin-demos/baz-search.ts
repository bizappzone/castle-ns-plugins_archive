import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBazSearch } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-search';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBazSearch {}
