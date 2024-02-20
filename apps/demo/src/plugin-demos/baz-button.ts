import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBazButton } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-button';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBazButton {}
