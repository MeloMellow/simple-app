import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type AffirmationDevGetObservableResponse = {
  affirmation: string;
};
@Injectable({
  providedIn: 'root',
})
export class AffirmationDevService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<AffirmationDevGetObservableResponse>(
      'https://www.affirmations.dev/'
    );
  }
}
