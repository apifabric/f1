import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RACERESULT_MODULE_DECLARATIONS, RaceResultRoutingModule} from  './RaceResult-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RaceResultRoutingModule
  ],
  declarations: RACERESULT_MODULE_DECLARATIONS,
  exports: RACERESULT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RaceResultModule { }