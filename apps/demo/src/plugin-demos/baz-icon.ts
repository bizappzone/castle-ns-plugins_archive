import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBazIcon } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-icon';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBazIcon {}
