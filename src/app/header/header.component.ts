import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
clientId="test_client_1";
constructor(private router:Router){}
  /*This link will navigate to login component*/
  logout(){
    localStorage.removeItem('authtoken');
    this.router.navigate(['login/']);
    history.replaceState({},'','clientlogin/:id');
  }
}
