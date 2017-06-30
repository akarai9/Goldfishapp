import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }from './app-routing.module';
import { AppComponent } from './app.component';
import { GFCwebloginComponent } from './gfcweblogin/gfcweblogin.component';
import { GFCweblogin1Component } from './gfcweblogin1/gfcweblogin1.component';
import { GFCwebinComponent } from './gfcwebin/gfcwebin.component';
import { GFCwebmoreaccountComponent } from './gfcwebmoreaccount/gfcwebmoreaccount.component';
import { RouterModule,CanActivate} from '@angular/router';
import { AppService } from './app.service';
import { AuthGuard } from './auth-guard.service';
import { HeaderComponent } from './header/header.component'; 


@NgModule({
  declarations: [
  AppComponent,
  GFCwebloginComponent,
  GFCweblogin1Component,
  GFCwebinComponent,
  GFCwebmoreaccountComponent,
  HeaderComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  AppRoutingModule
  ],
  providers: [AppService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {s
 }
