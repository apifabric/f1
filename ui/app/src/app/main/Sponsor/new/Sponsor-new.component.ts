import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Sponsor-new',
  templateUrl: './Sponsor-new.component.html',
  styleUrls: ['./Sponsor-new.component.scss']
})
export class SponsorNewComponent {
  @ViewChild("SponsorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}