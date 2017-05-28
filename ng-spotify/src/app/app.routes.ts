import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);