import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TEAM_MODULE_DECLARATIONS, TeamRoutingModule} from  './Team-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TeamRoutingModule
  ],
  declarations: TEAM_MODULE_DECLARATIONS,
  exports: TEAM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeamModule { }