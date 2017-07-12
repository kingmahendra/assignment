import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitDataService {

  constructor( private http: Http) { }
  fetchData (user) {
  	const url = 'https://api.github.com/users/' + user;
  	 this.http.get(url)// .map(response => response.json())
  	 .subscribe((data) => { console.log(data) });
  	// return 'successfull';
  }

}
