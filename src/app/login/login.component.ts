import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from "firebase";
import { ToastrService } from 'ngx-toastr';
import { MyfireService } from '../service/myfire.service';
import { UsermyfireService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // toastService: any;
  // usersservice: any;


  constructor(
    private toastr: ToastrService,
    private myfire: MyfireService,
    private user: UsermyfireService,
   
    private router:Router) { }

  ngOnInit() {
  }
  submit(form: NgForm) {
    let email = form.value.email;
    let Username = form.value.Username;
    let fullname = form.value.fullname;
    let password = form.value.password;
    
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(userData => {
        if (userData.user.emailVerified) {
          this.myfire.getDataFromDatabase(userData.user.uid).then(userDataFromDatabase =>{
            this.user.set(userDataFromDatabase);
            const message =`${Username} has been successfull verified`;
            this.toastr.success(message);
            this.router.navigate(["/addimages"])
          }).catch( err => console.log(err))
            

        } else {
          const message = `${email} not yet verified place check your email and  verified`;
          this.toastr.error(message);
          firebase.auth().signOut();
        }
      })
      .catch(err => {
        this.toastr.error(err.message)
      })

  }

}
