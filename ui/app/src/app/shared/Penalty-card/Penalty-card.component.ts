import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Penalty-card.component.html',
  styleUrls: ['./Penalty-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Penalty-card]': 'true'
  }
})

export class PenaltyCardComponent {


}