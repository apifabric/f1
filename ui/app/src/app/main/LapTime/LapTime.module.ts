import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LAPTIME_MODULE_DECLARATIONS, LapTimeRoutingModule} from  './LapTime-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LapTimeRoutingModule
  ],
  declarations: LAPTIME_MODULE_DECLARATIONS,
  exports: LAPTIME_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LapTimeModule { }