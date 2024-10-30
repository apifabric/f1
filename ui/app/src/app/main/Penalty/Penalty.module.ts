import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PENALTY_MODULE_DECLARATIONS, PenaltyRoutingModule} from  './Penalty-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PenaltyRoutingModule
  ],
  declarations: PENALTY_MODULE_DECLARATIONS,
  exports: PENALTY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PenaltyModule { }