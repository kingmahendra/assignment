import { Component, OnInit } from '@angular/core';
import { GitDataService } from './../services/git-data.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos = [];
  user = '';
  constructor(private gitDataService: GitDataService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
  		this.user = params['login']
  	});
  	const url = 'https://api.github.com/users/' + this.user + '/repos';
  	this.gitDataService.fetchData(url)
    .subscribe((data) => { 
  		this.repos = data;
  	}, (error) => {console.log(error)});
  }

}
