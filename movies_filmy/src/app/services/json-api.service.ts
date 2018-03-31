import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';

@Injectable()
export class JsonApiService {

  public msg : any;

  private headers =new Headers({ 'Content-Type':'application/json'})
  constructor(private http: Http) {
  }

// Call rest api to save favourite movie into json database
addToFavourite(movie){
  return this.http.post(AppConfig.apiUrl+'/movies', movie ,{headers: this.headers})
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

// Call rest api to get favourite movies from json database
getFavourite(){
  return this.http.get(AppConfig.apiUrl+'/all', {headers: this.headers})
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

// Call rest api to delete favourite movies from json database
deleteMovie(movieId){
  return this.http.delete(AppConfig.apiUrl+'/'+movieId , {headers: this.headers})
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}
// updated data
updateMovies(movie){
  return this.http.put(AppConfig.apiUrl+'/updateMovie',movie, {headers: this.headers})
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

// Handle errors
private handleError(error: Response){
 this.msg=error;
 this.msg.toString();
  // return Observable.throw(this.msg);
}

//user details
userdetails(Userobj)
{
  return this.http.post(AppConfig.userUrl+'/usersend/Userdata', Userobj ,{headers: this.headers})
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}

// login data
loginUser(Useraccess){
  return this.http.post(AppConfig.userUrl+'/usersend/data',Useraccess, {headers: this.headers})
  .map(loginData => loginData.json(),

    (error:any) =>this.handleError(error));
}

}
