import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'RaceResult-new',
  templateUrl: './RaceResult-new.component.html',
  styleUrls: ['./RaceResult-new.component.scss']
})
export class RaceResultNewComponent {
  @ViewChild("RaceResultForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}