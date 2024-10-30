import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Circuit-card.component.html',
  styleUrls: ['./Circuit-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Circuit-card]': 'true'
  }
})

export class CircuitCardComponent {


}