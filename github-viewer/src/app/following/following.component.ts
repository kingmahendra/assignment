import { Component, OnInit } from '@angular/core';
import { GitDataService } from './../services/git-data.service';


@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  /*followings = [];
  user= '';*/
  constructor(private gitDataService: GitDataService) { }

  ngOnInit() {

  	const url = 'https://api.github.com/users/' + this.gitDataService.gitUser.info.login + '/following';
  	this.gitDataService.fetchFollowingData(url)
  }
  showDetails (login) {
    const url = 'https://api.github.com/users/' + login;
    this.gitDataService.fetchData(url)

    const foll_url = 'https://api.github.com/users/' + login + '/following';
    this.gitDataService.fetchFollowingData(foll_url)
  }
}
