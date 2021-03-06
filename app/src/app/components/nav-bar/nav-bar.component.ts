import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { notify } from 'src/app/swal-notification';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public user: User;
  constructor(public userService: UserService, public router: Router) {
    this.user = this.userService.getUser();
  }

  logout() {
    notify.loading();
    this.userService.logout();
    this.router.navigateByUrl('');
    notify.close();
  }

  ngOnInit(): void {}
}
