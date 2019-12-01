import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UsermyfireService } from '../service/user.service';
import {RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedin:Boolean=false;
  
 
  constructor(private userservice: UsermyfireService,private router:Router) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData =>{
      if(userData && userData.emailVerified){
        this.isLoggedin=true;
      }else{
        this.isLoggedin=false;
      }
    })
  }
  logout(user){
    firebase.auth().signOut();
    this.userservice.destory();
    this.router.navigate(["/login"])
  }

}
