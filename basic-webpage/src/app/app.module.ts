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

// import { PostsComponent } from './posts/posts.component'; // component
// import { PostsService } from './posts.service'; // provider service

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
  declarations: [
    AppComponent,
    JumbotronComponent,
    NavbarComponent,
    HomepageComponent,
    AboutpageComponent,
    // PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [], // [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
