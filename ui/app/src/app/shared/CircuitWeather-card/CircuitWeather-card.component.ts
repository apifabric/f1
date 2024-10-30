import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CircuitWeather-card.component.html',
  styleUrls: ['./CircuitWeather-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CircuitWeather-card]': 'true'
  }
})

export class CircuitWeatherCardComponent {


}