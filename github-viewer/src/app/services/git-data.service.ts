import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitDataService {
  search = ''	
  gitUser = {
  	info: null,
  	followers: [],
  	followings: [],
  	repos: []
  }
  constructor( private http: Http) { }
    fetchData (url) {
     return this.http.get(url).map(response => response.json())
           .subscribe((data) => { 
  		     this.gitUser.info = data;
  		     this.search = '';
  	       }, (error) => {console.log(error)})
    }

   fetchFollowerData (url) {
     return this.http.get(url).map(response => response.json())
           .subscribe((data) => { 
  		     this.gitUser.followers = data;
  	       }, (error) => {console.log(error)})
  }

   fetchFollowingData (url) {
     return this.http.get(url).map(response => response.json())
           .subscribe((data) => { 
  		     this.gitUser.followings = data;
  	       }, (error) => {console.log(error)})
  }

  fetchReposData (url) {
    return this.http.get(url).map(response => response.json())
           .subscribe((data) => { 
  		     this.gitUser.repos = data;
  	       }, (error) => {console.log(error)})
  }
}
