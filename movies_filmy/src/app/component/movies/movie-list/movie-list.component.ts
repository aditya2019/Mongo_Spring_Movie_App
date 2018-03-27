import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppConfig } from './../../../config/config.constant';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
	@Input() movies: Array<any>=[];
	@Input() flag: string;
  @Output() CountDel= new EventEmitter();
  public movieUrl=AppConfig.baseUrl;
  public favMovies=[];
  public errorMsg="";
  public displayError:boolean=false;
  constructor() {
  }

  ngOnInit() {
    this.displayError=false;
  }

  setValueTofav(event){
    this.favMovies=event.favMovies;
    this.CountDel.emit({
      'favMovies': this.favMovies
    });
  }

//show error on the browser if user added duplicate movies
  showError(event){
    this.displayError=false;
    this.errorMsg=event.errMsg;
    if(this.errorMsg!=""){
    this.displayError=true;
      }}
}
