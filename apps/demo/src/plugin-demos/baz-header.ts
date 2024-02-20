import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBazHeader } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-header';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBazHeader {}
