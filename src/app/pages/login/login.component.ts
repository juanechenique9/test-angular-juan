import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formLogin = new FormGroup(
      {
        user: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
      }
    )
  }

  authUser() {
    const { user, password } = this.formLogin.value;

    this.authService.authUser(user, password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        console.log('navega')
      } else {
        console.log('no navega')
      }
    });
  }

}
