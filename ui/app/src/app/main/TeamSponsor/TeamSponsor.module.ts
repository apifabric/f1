import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TEAMSPONSOR_MODULE_DECLARATIONS, TeamSponsorRoutingModule} from  './TeamSponsor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TeamSponsorRoutingModule
  ],
  declarations: TEAMSPONSOR_MODULE_DECLARATIONS,
  exports: TEAMSPONSOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeamSponsorModule { }