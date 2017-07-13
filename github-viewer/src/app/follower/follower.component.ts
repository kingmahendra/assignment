import { Component, OnInit } from '@angular/core';
import { GitDataService } from './../services/git-data.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  // followers = [];
  //user= '';
  constructor(private gitDataService: GitDataService, private route: ActivatedRoute) { }

  ngOnInit() {
  	// this.route.params.forEach((params: Params) => {
  	// 	this.user = params['login']
  	// });
    
    // this.user = this.gitDataService.gitUser.info.login
  	const url = 'https://api.github.com/users/' + this.gitDataService.gitUser.info.login + '/followers';
    this.gitDataService.fetchFollowerData(url)
   //  .subscribe((data) => { 
  	// 	this.followers = data;
  	// }, (error) => {console.log(error)});
  }

  showDetails (login) {
    const url = 'https://api.github.com/users/' + login;
    this.gitDataService.fetchData(url)

    const foll_url = 'https://api.github.com/users/' + login + '/followers';
    this.gitDataService.fetchFollowerData(foll_url)
  }
}
