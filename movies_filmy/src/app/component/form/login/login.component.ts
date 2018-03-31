import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../../services/json-api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [JsonApiService ]
})
export class LoginComponent implements OnInit {
 public Useraccess:any={};
 public errorMsg:any={};
 public showError : boolean = false;
 public wrong = '';
 constructor(private jsonApiService: JsonApiService,private router: Router) { }

  ngOnInit() {
  }
//--- Login submit method
  login(Useraccess){
		this.jsonApiService.loginUser(Useraccess).subscribe((res)=>{
			this.Useraccess={};
			this.router.navigate(['/home']);
		},(error:any)=>{
			this.errorMsg = JSON.parse(error._body);
      console.log(this.errorMsg.error);
//---- error alert flage
      this.wrong='yes';
		})

	}
}
