import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from './services/auth.service';
import { AuthGuard } from 'app/services/auth-guard.service';
import { PostsComponent } from './views/posts/posts.component';
import { MapComponent } from './views/map/map.component';

//firebase.initializeApp(environment.firebase)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PostsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCstvs2wYm9XLz0EkVZz2YyM0C2_NRqenY'
    })    
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
