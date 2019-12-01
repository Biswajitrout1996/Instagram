import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularproject';
  
  ngOnInit(){
    var firebaseConfig = {
      apiKey: "AIzaSyCJmK00GhVCdS9QkNh5qRAn95kPKNYkJSQ",
      authDomain: "instagram-581db.firebaseapp.com",
      databaseURL: "https://instagram-581db.firebaseio.com",
      projectId: "instagram-581db",
      storageBucket: "instagram-581db.appspot.com",
      messagingSenderId: "808182399645",
      appId: "1:808182399645:web:468a2fda6ca5ac687c4a74"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
   
  }  

}

