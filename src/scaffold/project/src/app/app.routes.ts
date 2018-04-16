import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AwayComponent } from './shared/components/away/away.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'away', component: AwayComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);