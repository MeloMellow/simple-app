import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signin(data: SigninData) {
    return this.http.post<User>('http://localhost:3434/api/v1/login', {
      email: data.email,
      password: data.password,
    });
  }
  login(user: User) {
    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-name', user.name);
    localStorage.setItem('user-token', user.accessToken);
  }
  logout() {
    localStorage.removeItem('user-email');
    localStorage.removeItem('user-name');
    localStorage.removeItem('user-token');
  }

  isLoggedin(): boolean {
    const accessToken = localStorage.getItem('user-token');
    if (accessToken) {
      return true;
    } else {
      return false;
    }
  }
}

export type SigninData = {
  email?: string | null;
  password?: string | null;
};
