import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'LapTime-new',
  templateUrl: './LapTime-new.component.html',
  styleUrls: ['./LapTime-new.component.scss']
})
export class LapTimeNewComponent {
  @ViewChild("LapTimeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}