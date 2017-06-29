import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router';
import { User } from './../user';
import { AppService } from './../app.service';

@Component({
  selector: 'app-gfcweblogin',
  templateUrl: './gfcweblogin.component.html',
  styleUrls: ['./gfcweblogin.component.css']
})
export class GFCwebloginComponent implements OnInit {
 
  user=new User();
  code:User;

  constructor (private router:Router,private _app:AppService){}

  ngOnInit(){}
  
  /*This function will subscribe data from post request and print the smscode in console which we need 
  to login and then navigate to next page i.e authenticateUser*/
  authenticateUser() {
    let url="http://server.localhostsro.sk:58080/user/sendSMS";
    this._app.addUser(this.user,url)
      .subscribe(data=>{
        console.log(data.code);
        console.log(this.user.clientId);
      },
      error => {
        alert("Error");
      },
      ()=>{
        this.router.navigate(['authenticateUser/']);
      });        
  }
}
