import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { User } from './../user';
import { AppService } from './../app.service';

@Component({
  selector: 'app-gfcwebin',
  templateUrl: './gfcwebin.component.html',
  styleUrls: ['./gfcwebin.component.css']
})
export class GFCwebinComponent implements OnInit {
  user:User;
  params:any;
  clientId="test_client_1";

  constructor(private router:Router,private _app:AppService,private route:ActivatedRoute) {}
  
  /*ngOninit function will load the data in input boxes as the component loads*/
  ngOnInit(){
    this.getDataById(this.clientId);
  }

  /*This function is used to get account details of client ang show equity,balance and gain value 
  on the page.*/
  getDataById(clientId:string){
    let dataUrl="http://server.localhostsro.sk:58080/user/getClient/"+clientId;
    this._app.getClientbyId(dataUrl)
    .subscribe(res =>{
      this.user=res;
    },
    error =>{
      console.log("error");
    },
    ()=>{
    });
  }

  /*this function activates when we click on more button and navigates to webmoreaccount component*/
  more(){
    this.router.navigate(['clientdetails/'+this.clientId]);	
  }
/*
  /*This link will navigate to login component
  logout(){
    localStorage.removeItem('authtoken');
    this.router.navigate(['login/']);
  }*/
}

