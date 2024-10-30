import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PenaltyHomeComponent } from './home/Penalty-home.component';
import { PenaltyNewComponent } from './new/Penalty-new.component';
import { PenaltyDetailComponent } from './detail/Penalty-detail.component';

const routes: Routes = [
  {path: '', component: PenaltyHomeComponent},
  { path: 'new', component: PenaltyNewComponent },
  { path: ':id', component: PenaltyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Penalty-detail-permissions'
      }
    }
  }
];

export const PENALTY_MODULE_DECLARATIONS = [
    PenaltyHomeComponent,
    PenaltyNewComponent,
    PenaltyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenaltyRoutingModule { }