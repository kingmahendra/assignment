import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GitDataService } from './services/git-data.service';
import { FollowerComponent } from './follower/follower.component';
import { FollowingComponent } from './following/following.component';
import { ReposComponent } from './repos/repos.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FollowerComponent,
    FollowingComponent,
    ReposComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'follower',
        component: FollowerComponent
      },
      {
        path: 'following',
        component: FollowingComponent
      },
      {
        path: 'repos',
        component: ReposComponent
      }

    ])
  ],
  providers: [GitDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
