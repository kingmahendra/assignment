import { Component, OnInit } from '@angular/core';
import { GitDataService } from './../services/git-data.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  following = [];
  user= '';
  constructor(private gitDataService: GitDataService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
  		this.user = params['login']
  	});
   }

}
