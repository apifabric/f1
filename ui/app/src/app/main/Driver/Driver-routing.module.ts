import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverHomeComponent } from './home/Driver-home.component';
import { DriverNewComponent } from './new/Driver-new.component';
import { DriverDetailComponent } from './detail/Driver-detail.component';

const routes: Routes = [
  {path: '', component: DriverHomeComponent},
  { path: 'new', component: DriverNewComponent },
  { path: ':id', component: DriverDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Driver-detail-permissions'
      }
    }
  },{
    path: ':driver_id/LapTime', loadChildren: () => import('../LapTime/LapTime.module').then(m => m.LapTimeModule),
    data: {
        oPermission: {
            permissionId: 'LapTime-detail-permissions'
        }
    }
},{
    path: ':driver_id/Penalty', loadChildren: () => import('../Penalty/Penalty.module').then(m => m.PenaltyModule),
    data: {
        oPermission: {
            permissionId: 'Penalty-detail-permissions'
        }
    }
},{
    path: ':driver_id/Qualification', loadChildren: () => import('../Qualification/Qualification.module').then(m => m.QualificationModule),
    data: {
        oPermission: {
            permissionId: 'Qualification-detail-permissions'
        }
    }
},{
    path: ':driver_id/RaceResult', loadChildren: () => import('../RaceResult/RaceResult.module').then(m => m.RaceResultModule),
    data: {
        oPermission: {
            permissionId: 'RaceResult-detail-permissions'
        }
    }
}
];

export const DRIVER_MODULE_DECLARATIONS = [
    DriverHomeComponent,
    DriverNewComponent,
    DriverDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }