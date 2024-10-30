import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TeamSponsor-new',
  templateUrl: './TeamSponsor-new.component.html',
  styleUrls: ['./TeamSponsor-new.component.scss']
})
export class TeamSponsorNewComponent {
  @ViewChild("TeamSponsorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}