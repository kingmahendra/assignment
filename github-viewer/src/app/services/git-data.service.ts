import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitDataService {

  constructor( private http: Http) { }
  fetchData (url): Observable<any> {
  	// const url = 'https://api.github.com/users/' + user;
    return this.http.get(url).map(response => response.json())
  }

 /* private handleError (error: Response | any) {
	  let errMsg: string;
	  if (error instanceof Response) {
	    const body = error.json() || '';
	    const err = body.error || JSON.stringify(body);
	    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  } else {
	    errMsg = error.message ? error.message : error.toString();
	  }
	  console.error(errMsg);
	  return Observable.throw(errMsg);
  }*/

}
