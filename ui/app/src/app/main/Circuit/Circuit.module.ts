import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CIRCUIT_MODULE_DECLARATIONS, CircuitRoutingModule} from  './Circuit-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CircuitRoutingModule
  ],
  declarations: CIRCUIT_MODULE_DECLARATIONS,
  exports: CIRCUIT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CircuitModule { }