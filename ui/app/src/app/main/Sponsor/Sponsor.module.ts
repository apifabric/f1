import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SPONSOR_MODULE_DECLARATIONS, SponsorRoutingModule} from  './Sponsor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SponsorRoutingModule
  ],
  declarations: SPONSOR_MODULE_DECLARATIONS,
  exports: SPONSOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SponsorModule { }