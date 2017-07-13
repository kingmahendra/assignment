import { Component, OnInit } from '@angular/core';
import { GitDataService } from './../services/git-data.service';
import { SearchPipe } from './../search.pipe';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  // repos = [];
  // user = '';
  constructor(private gitDataService: GitDataService) { }

  ngOnInit() {
  	// this.route.params.forEach((params: Params) => {
  	// 	this.user = params['login']
  	// });
  	const url = 'https://api.github.com/users/' + this.gitDataService.gitUser.info.login + '/repos';
  	this.gitDataService.fetchReposData(url)
   //  .subscribe((data) => { 
  	// 	this.repos = data;
  	// }, (error) => {console.log(error)});
  }

}
