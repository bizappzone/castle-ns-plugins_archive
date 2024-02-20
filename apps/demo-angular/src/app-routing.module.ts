import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'baz-body', loadChildren: () => import('./plugin-demos/baz-body.module').then((m) => m.BazBodyModule) },
  { path: 'baz-button', loadChildren: () => import('./plugin-demos/baz-button.module').then((m) => m.BazButtonModule) },
  { path: 'baz-footer', loadChildren: () => import('./plugin-demos/baz-footer.module').then((m) => m.BazFooterModule) },
  { path: 'baz-header', loadChildren: () => import('./plugin-demos/baz-header.module').then((m) => m.BazHeaderModule) },
  { path: 'baz-icon', loadChildren: () => import('./plugin-demos/baz-icon.module').then((m) => m.BazIconModule) },
  { path: 'baz-input', loadChildren: () => import('./plugin-demos/baz-input.module').then((m) => m.BazInputModule) },
  { path: 'baz-language', loadChildren: () => import('./plugin-demos/baz-language.module').then((m) => m.BazLanguageModule) },
  { path: 'baz-layout', loadChildren: () => import('./plugin-demos/baz-layout.module').then((m) => m.BazLayoutModule) },
  { path: 'baz-search', loadChildren: () => import('./plugin-demos/baz-search.module').then((m) => m.BazSearchModule) },
  { path: 'baz-splash', loadChildren: () => import('./plugin-demos/baz-splash.module').then((m) => m.BazSplashModule) },
  { path: 'baz-text', loadChildren: () => import('./plugin-demos/baz-text.module').then((m) => m.BazTextModule) },
  { path: 'baz-theme', loadChildren: () => import('./plugin-demos/baz-theme.module').then((m) => m.BazThemeModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
