import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Qualification-new',
  templateUrl: './Qualification-new.component.html',
  styleUrls: ['./Qualification-new.component.scss']
})
export class QualificationNewComponent {
  @ViewChild("QualificationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}