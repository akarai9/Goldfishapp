import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

	constructor( private _http:Http){}

	/*This will authenticate certain by adding authtoken in headers of get api to access the account daetail
	of that client who has authToken*/
	getClientbyId(url:string){
		let headers = new Headers();
		let a = localStorage.getItem('authtoken');
		headers.append('auth_token',a);
		const options = new RequestOptions({ headers : headers });
		return this._http.get(url,options).map((res:Response) => res.json());
	}

 	/*This Function will send Smscode to server(backend) and then generate authToken which we will use in get
	 request*/
	/*This function will send the clientId to server.It hits the post Api*/
	addUser(user:User,url:string){
		return this._http.post(url,user).map(data=>{return data.json();})
	}

	logout(url:string){
		return this._http.get(url).map((res:Response) => res.json());
	}
}

