import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

// Define routes
const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: 'about',
        component: AboutpageComponent
    }
];


@NgModule({
  // Specify all components
	declarations: [
    AppComponent,
    JumbotronComponent,
    NavbarComponent,
    HomepageComponent,
    AboutpageComponent,
  ],
	// Specify all imports from Angular
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [], // To specify services if any
  bootstrap: [AppComponent]
})
export class AppModule { }
