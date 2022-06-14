import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => import('./app/test/test.component').then(m => m.TestComponent),
  },
  {
    path: '',
    redirectTo: '/test',
    pathMatch: 'full'
  },
];

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
}).catch(err => console.error(err));
