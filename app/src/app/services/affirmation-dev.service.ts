import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from './config/api.config';

export type AffirmationDevGetObservableResponse = {
  affirmation: string;
};
@Injectable({
  providedIn: 'root',
})
export class AffirmationDevService {
  constructor(private http: HttpClient) {}

  getMessage() {
    return this.http.get<AffirmationDevGetObservableResponse>(
      `${Api.apiUrl}/api/v1/affirmation-dev`
    );
  }
  isMessageAlreadyBeenDisplayedToday(): boolean {
    let date: Date | string | null = localStorage.getItem('message-date');
    if (date) {
      date = new Date(date);
      const toDay = new Date();
      return (
        date.getDate() == toDay.getDate() &&
        date.getMonth() == toDay.getMonth() &&
        date.getFullYear() == toDay.getFullYear()
      );
    }
    return false;
  }
  setTheDateMessageHasBeenDisplayed(date: Date) {
    localStorage.setItem('message-date', date.toString());
  }
  onLogout() {
    localStorage.removeItem('message-date');
  }
}
