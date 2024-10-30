import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Race-card.component.html',
  styleUrls: ['./Race-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Race-card]': 'true'
  }
})

export class RaceCardComponent {


}