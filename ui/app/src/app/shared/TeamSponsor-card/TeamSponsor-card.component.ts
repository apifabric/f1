import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TeamSponsor-card.component.html',
  styleUrls: ['./TeamSponsor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TeamSponsor-card]': 'true'
  }
})

export class TeamSponsorCardComponent {


}