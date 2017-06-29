import { Component} from '@angular/core';
import { Router,ActivatedRoute}   from '@angular/router';
import { User } from './../user'; 
import { AppService } from './../app.service';

@Component({
	selector: 'app-gfcweblogin1',
	templateUrl: './gfcweblogin1.component.html',
	styleUrls: ['./gfcweblogin1.component.css']
})
export class GFCweblogin1Component {

	user=new User();
	clientId="test_client_1";
	authToken:string;
	data:any;

	constructor(private router:Router,private _app:AppService) {}

/*This function will activate on click of button login after entering the smscode in input box
Then this post request will return a auth token which we need to access a client's detail then 
It will navigate webin component*/

loadClient(){
	let url="http://server.localhostsro.sk:58080/user/login";
	this.user.clientId = this.clientId;
	this._app.addUser(this.user,url)
	.subscribe(data=>{
		localStorage.setItem('authtoken',data.authToken);
		let a=localStorage.getItem('authtoken');
	},
	error =>{
		alert("Error");
	},
	()=>{	
		this.router.navigate(['clientlogin/'+this.clientId]);
	});
}
}