import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceResultHomeComponent } from './home/RaceResult-home.component';
import { RaceResultNewComponent } from './new/RaceResult-new.component';
import { RaceResultDetailComponent } from './detail/RaceResult-detail.component';

const routes: Routes = [
  {path: '', component: RaceResultHomeComponent},
  { path: 'new', component: RaceResultNewComponent },
  { path: ':id', component: RaceResultDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RaceResult-detail-permissions'
      }
    }
  }
];

export const RACERESULT_MODULE_DECLARATIONS = [
    RaceResultHomeComponent,
    RaceResultNewComponent,
    RaceResultDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceResultRoutingModule { }