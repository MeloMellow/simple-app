import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { share } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { notify } from 'src/app/swal-notification';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
})
export class SigninFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: UserService, private router: Router) {}

  async onSubmit() {
    const request = this.authService.signin(this.loginForm.value).pipe(share());
    notify.loading();
    request.subscribe({
      next: (user) => {
        notify.close();
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        notify.wrongCredentials();
        console.log(err.status);
      },
    });
  }

  ngOnInit(): void {}
}
