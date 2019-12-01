import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddimagesComponent } from './addimages/addimages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'addimage',component:AddimagesComponent, canActivate:[AuthGuardGuard]},
{path:'signup',component:SignupComponent},
{path:'**',component:PagenotfoundComponent},
{path:'addimages',component:AddimagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
