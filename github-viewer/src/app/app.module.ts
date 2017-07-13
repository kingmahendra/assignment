import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { GitDataService } from './services/git-data.service';
import { FollowerComponent } from './follower/follower.component';
import { FollowingComponent } from './following/following.component';


@NgModule({
  declarations: [
    AppComponent,
    FollowerComponent,
    FollowingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'follower/:login',
        component: FollowerComponent
      },
      {
        path: 'following/:login',
        component: FollowingComponent
      }

    ])
  ],
  providers: [GitDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
