import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
  	const token=localStorage.getItem('authtoken');
  	if(token){
  		return true;
  	}
  }
}