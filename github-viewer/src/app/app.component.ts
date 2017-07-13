import { Component } from '@angular/core';

import { GitDataService } from './services/git-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private gitDataService: GitDataService) {

  }

  showDetails () {
  	const url = 'https://api.github.com/users/' + this.gitDataService.search;
  	this.gitDataService.fetchData(url);
  }
}
