import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Team-card.component.html',
  styleUrls: ['./Team-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Team-card]': 'true'
  }
})

export class TeamCardComponent {


}