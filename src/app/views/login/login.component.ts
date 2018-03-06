import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {
  }


   signInWithTwitter() {
      this.authService.signInWithTwitter()
      .then((res) => { 
        sessionStorage.setItem("loginOption", "Twitter");
        localStorage.setItem("loginOption", "Twitter");
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
    }


    signInWithFacebook() {
      this.authService.signInWithFacebook()
      .then((res) => {
        sessionStorage.setItem("loginOption", "Facebook");
        localStorage.setItem("loginOption", "Facebook");        
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
    }


    signInWithGoogle() {
      this.authService.signInWithGoogle()
      .then((res) => {
        sessionStorage.setItem("loginOption", "Google");
        localStorage.setItem("loginOption", "Google");
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
    }

    signInWithGithub() {
      this.authService.signInWithGithub()
      .then((res) => {
        sessionStorage.setItem("loginOption", "Github");
        localStorage.setItem("loginOption", "Github");
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
    }

    signInWithEmail() {

      this.authService.signInRegular(this.user.email, this.user.password)
        .then((res) => {
          console.log(res);
          sessionStorage.setItem("loginOption", "email");
          localStorage.setItem("loginOption", "email");
          this.router.navigate(['dashboard']);
        })
        .catch((err) => console.log('error: ' + err));
    }

  ngOnInit() {
  }

}
