import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { share } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { notify } from 'src/app/swal-notification';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router) {}

  async onSubmit() {
    const request = this.userService.signup(this.loginForm.value).pipe(share());
    notify.loading();
    request.subscribe({
      next: (user) => {
        notify.accountCreated();
        this.userService.login(user);
        this.router.navigateByUrl('/signin');
      },
      error: (err) => {
        if (err.status == 409) {
          notify.conflictCredentials();
        } else {
          notify.wrongCredentials();
        }
      },
    });
  }

  ngOnInit(): void {}
}
