import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceHomeComponent } from './home/Race-home.component';
import { RaceNewComponent } from './new/Race-new.component';
import { RaceDetailComponent } from './detail/Race-detail.component';

const routes: Routes = [
  {path: '', component: RaceHomeComponent},
  { path: 'new', component: RaceNewComponent },
  { path: ':id', component: RaceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Race-detail-permissions'
      }
    }
  },{
    path: ':race_id/LapTime', loadChildren: () => import('../LapTime/LapTime.module').then(m => m.LapTimeModule),
    data: {
        oPermission: {
            permissionId: 'LapTime-detail-permissions'
        }
    }
},{
    path: ':race_id/Penalty', loadChildren: () => import('../Penalty/Penalty.module').then(m => m.PenaltyModule),
    data: {
        oPermission: {
            permissionId: 'Penalty-detail-permissions'
        }
    }
},{
    path: ':race_id/Qualification', loadChildren: () => import('../Qualification/Qualification.module').then(m => m.QualificationModule),
    data: {
        oPermission: {
            permissionId: 'Qualification-detail-permissions'
        }
    }
},{
    path: ':race_id/RaceResult', loadChildren: () => import('../RaceResult/RaceResult.module').then(m => m.RaceResultModule),
    data: {
        oPermission: {
            permissionId: 'RaceResult-detail-permissions'
        }
    }
}
];

export const RACE_MODULE_DECLARATIONS = [
    RaceHomeComponent,
    RaceNewComponent,
    RaceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceRoutingModule { }