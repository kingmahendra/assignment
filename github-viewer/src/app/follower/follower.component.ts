import { Component, OnInit } from '@angular/core';
import { GitDataService } from './../services/git-data.service';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  constructor(private gitDataService: GitDataService) { }

  ngOnInit() {
  	const url = 'https://api.github.com/users/' + this.gitDataService.gitUser.info.login + '/followers';
    this.gitDataService.fetchFollowerData(url)
  }

  showDetails (login) {
    const url = 'https://api.github.com/users/' + login;
    this.gitDataService.fetchData(url)

    const foll_url = 'https://api.github.com/users/' + login + '/followers';
    this.gitDataService.fetchFollowerData(foll_url)
  }
}
