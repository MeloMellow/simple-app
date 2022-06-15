import { Component, OnInit } from '@angular/core';
import { share } from 'rxjs/internal/operators/share';
import { AffirmationDevService } from 'src/app/services/affirmation-dev.service';
import { notify } from 'src/app/swal-notification';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private affimationDevService: AffirmationDevService) {
    //this.triggerAffimationDevMessage();
  }

  triggerAffimationDevMessage() {
    const request = this.affimationDevService.get().pipe(share());
    request.subscribe({
      next: (response) => {
        notify.message(response.affirmation, 'Welcome!');
      },
    });
  }

  ngOnInit(): void {}
}
