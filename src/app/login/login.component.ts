import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  username = new FormControl('', [
    // Validators.required,
    /// / Validators.minLength(6),
    // Validators.maxLength(15)
  ]);
  password = new FormControl('', [
    // Validators.required,
    // Validators.minLength(6), ,
    // Validators.maxLength(15)
  ]);

  constructor(// private authService: AuthService,
      public router: Router, // public????????????????????????????????
      private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    /*if (this.authService.isUserLoggedIn()) {
        this.router.navigate(['/paths']);
    }*/
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    });
  }


  placeholder() {
    return 'just leave empty';

//        return 'try me'; // this.login();
  }

  /*onLoggedin() {
      localStorage.setItem('isLoggedin', 'true');
  }*/

  login() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
    /*this.authService.login(this.loginForm.value).subscribe(
        res => this.router.navigate(['/paths']),
        error => this.toasterService.warning('', 'Utente non esistente o non autorizzato', {timeOut: 2000})
    );*/


    /*this.router.events.subscribe((e: any) => {
        // If it is a NavigationEnd event re-initalise the component
        if (e instanceof NavigationEnd) {
            console.log('1');
        } else {
            console.log('2');
        }
    });*/
  }
}
