import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AppConfig } from './../../../config/config.constant';
import { JsonApiService } from './../../../services/json-api.service';
import {NgForm} from '@angular/forms';


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
	public showerror : boolean = false;
	public currentMovie : any={};
	 @ViewChild('modalBtn') modalBtn: ElementRef;
  constructor(private jsonApiService: JsonApiService) {
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
		this.displayError= true;
    // if(this.errorMsg!=""){
    // this.displayError=true;
    //   }
	}


	setMovie(event){
this.currentMovie=event.movie;
this.modalBtn.nativeElement.click();

}

onSubmit(currentMovie) {
this.jsonApiService.updateMovies(this.currentMovie).subscribe(data=>{
	this.favMovies=this.currentMovie;
},(error:any)=>{
	this.errorMsg = error.statusText;
	this.showerror = true;
})
}
			 // update(movieId){
       //
		   //   },(error:any)=>{
       //
		   //   }

}
