import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from './../user';
import { AppService } from './../app.service';


@Component({
  selector: 'app-gfcwebmoreaccount',
  templateUrl: './gfcwebmoreaccount.component.html',
  styleUrls: ['./gfcwebmoreaccount.component.css']
})
export class GFCwebmoreaccountComponent implements OnInit {
 
  user:User;
  clientId="test_client_1";
/*This component is used to Show addition ccount details if any,in more field...this is static depending
upon the num of account details */
  constructor(private router:Router,private route:ActivatedRoute,private _app:AppService){} 
  
  ngOnInit(){
    this.getDataById(this.clientId);
  }

  getDataById(clientId:string){
    let dataUrl="http://server.localhostsro.sk:58080/user/getClient/"+clientId;
    this._app.getClientbyId(dataUrl)
      .subscribe(res =>{
        this.user=res;
      },
        error =>{
          alert("error");
      },
      ()=>{
        
      });
  }



}
