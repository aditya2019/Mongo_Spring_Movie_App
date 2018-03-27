import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TmdbApiService } from './../../../services/tmdb-api.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers:[TmdbApiService]
})

export class MovieSearchComponent implements OnInit {
  @Output() success = new EventEmitter<any>();
  public moviesList=[];
  public movieSearch: string;
  public errorMsg ='';
  public msg:string;
  public showError : boolean = false;
  public searchResult : boolean = false;

  constructor(private tmdbApiService : TmdbApiService) {
  }

  ngOnInit() {
  }

  // Function to get search text and make service call to get movies from TMDB
  searchMovie(){
    if(this.movieSearch.length<3){
      this.msg='movie name is less';
      this.moviesList=[];
      //this.onEventEmit(this.moviesList);
      // return;
    }
    this.tmdbApiService.searchMovie(this.movieSearch).subscribe((res) =>{
      this.moviesList = res.results;
       if(this.moviesList.length==0){
         this.searchResult=true;
       }
       else{
        this.searchResult=false;
       }
      this.msg='';
     this.onEventEmit(this.moviesList);
    }, (error) =>{
      this.errorMsg = error._body;
      this.showError = true;
    })
  }

//send movielist to the movies component
  onEventEmit(moviesList: any) {
     this.success.emit({
        'moviesList': moviesList
      });
  }
}
