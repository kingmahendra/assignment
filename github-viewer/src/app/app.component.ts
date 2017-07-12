import { Component , OnInit } from '@angular/core';

import { GitDataService } from './services/git-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  git_id = ''; // mralexgray

  constructor (private gitDataService: GitDataService) {

  }

  ngOnInit () {
    // console.log(this.gitDataService.fetchData())
  } 

  showDetails () {
  	console.log(this.git_id);
  	console.log(this.gitDataService.fetchData(this.git_id))
  }
}
