import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RaceResult-card.component.html',
  styleUrls: ['./RaceResult-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RaceResult-card]': 'true'
  }
})

export class RaceResultCardComponent {


}