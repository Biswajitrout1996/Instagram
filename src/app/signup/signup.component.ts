import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms'
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toastr: ToastrService,private router:Router) { }
  ngOnInit(){}

  submit(form: NgForm) {
    let email = form.value.email;
    let Username = form.value.Username;
    let fullname = form.value.fullname;
    let password = form.value.password;
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userData=>{
    userData.user.sendEmailVerification();
    const message=`Notification email has been sent to ${email} address please verify email`;
    this.toastr.success(message);
    firebase.database().ref('/users'+userData.user.uid)
    .set({
      uid:userData.user.uid,
      email,
      password,
      fullname,
      Username,
      registrationData:new Date().toString()

    });
    this.router.navigate(["/login"]);
    })
    .catch(err => {
      this.toastr.error(err.message);
      console.log(err);
    });
  }
  

}

