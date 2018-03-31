import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../../services/json-api.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [JsonApiService ]
})
export class RegistrationComponent implements OnInit {
public Userobj : any={};
public correct = '';
  constructor(private jsonApiService: JsonApiService) { }

  ngOnInit() {
  }
  userdetails(Userobj) {
    this.jsonApiService.userdetails(Userobj).subscribe((res) =>{
      this.Userobj={};

      this.correct='yes';
    },(error:any)=>{
  })
}
}
