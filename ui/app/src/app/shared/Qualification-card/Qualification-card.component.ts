import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Qualification-card.component.html',
  styleUrls: ['./Qualification-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Qualification-card]': 'true'
  }
})

export class QualificationCardComponent {


}