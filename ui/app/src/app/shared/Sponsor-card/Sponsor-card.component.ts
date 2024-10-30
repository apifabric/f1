import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Sponsor-card.component.html',
  styleUrls: ['./Sponsor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Sponsor-card]': 'true'
  }
})

export class SponsorCardComponent {


}