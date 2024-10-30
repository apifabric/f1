import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './LapTime-card.component.html',
  styleUrls: ['./LapTime-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.LapTime-card]': 'true'
  }
})

export class LapTimeCardComponent {


}