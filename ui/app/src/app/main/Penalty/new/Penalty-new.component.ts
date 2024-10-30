import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Penalty-new',
  templateUrl: './Penalty-new.component.html',
  styleUrls: ['./Penalty-new.component.scss']
})
export class PenaltyNewComponent {
  @ViewChild("PenaltyForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}