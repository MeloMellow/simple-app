import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

export type SigninData = {
  email?: string | null;
  password?: string | null;
};

export type SignupData = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signin(data: SigninData) {
    return this.http.post<User>('http://localhost:3434/api/v1/login', data);
  }
  signup(data: SignupData) {
    return this.http.post<User>('http://localhost:3434/api/v1/signup', data);
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

  getUser(): User {
    return {
      name: localStorage.getItem('user-name') || '',
      email: localStorage.getItem('user-email') || '',
      accessToken: localStorage.getItem('user-token') || '',
    };
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
