import { NgModule }             from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { GFCwebloginComponent } from './gfcweblogin/gfcweblogin.component';
import { GFCweblogin1Component } from './gfcweblogin1/gfcweblogin1.component';
import { GFCwebinComponent } from './gfcwebin/gfcwebin.component';
import { GFCwebmoreaccountComponent } from './gfcwebmoreaccount/gfcwebmoreaccount.component';
import { AuthGuard } from './auth-guard.service'; 

const routes:Routes=[
		{ path: '', redirectTo: '/login', pathMatch: 'full' },
		{ path: 'login', component: GFCwebloginComponent},
		{ path: 'authenticateUser', component: GFCweblogin1Component },
		{ path: 'clientlogin/:id', component: GFCwebinComponent, canActivate:[AuthGuard]},
		{ path: 'clientdetails/:id', component: GFCwebmoreaccountComponent, canActivate:[AuthGuard]}
		];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

