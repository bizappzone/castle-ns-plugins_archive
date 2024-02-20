import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBazTheme } from '@demo/shared';
import {} from '@bizappzone-castle-ui-ns/baz-theme';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBazTheme {}
