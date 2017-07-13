import { Component , OnInit } from '@angular/core';

import { GitDataService } from './services/git-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  git_id = ''; // mralexgray
  info = null;

  constructor (private gitDataService: GitDataService) {

  }

  ngOnInit () {
    // console.log(this.gitDataService.fetchData())
  } 

  showDetails () {
  	const url = 'https://api.github.com/users/' + this.git_id;
  	this.gitDataService.fetchData(url)
  	.subscribe((data) => { 
  		this.info = data;
  		this.git_id = '';
  	 }, (error) => {console.log(error)})
  	// .catch ( err => console.log(err.message));
  }
}
