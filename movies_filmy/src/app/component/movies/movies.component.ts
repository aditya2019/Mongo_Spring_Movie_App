import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../services/json-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [ JsonApiService ]
})

export class MoviesComponent implements OnInit {
  public movies =[];
  public hidden=true;
  public errorMsg ='';
  public showError : boolean = false;
  public favMovies=[];
  public flag = 'search';
  constructor(private jsonApiService: JsonApiService) { }

  ngOnInit() {
    this.countFavmovies();
  }

  //to set movielist data from search component
  setMovieList(event){
    this.hidden=false;
    this.movies = event.moviesList;
  }

  //get data of favourite movies from database
  countFavmovies() {
    this.jsonApiService.getFavourite().subscribe((res) =>{
      this.favMovies = res;
      this.showError = false;
    },(error:any)=>{
      this.errorMsg = error._body;
      this.showError = true;
    })
  }

//to set total no of favourite movies on browser
getnewlist(event){
 this.favMovies=event.favMovies;
 this.countFavmovies();
}

}
