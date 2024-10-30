import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamHomeComponent } from './home/Team-home.component';
import { TeamNewComponent } from './new/Team-new.component';
import { TeamDetailComponent } from './detail/Team-detail.component';

const routes: Routes = [
  {path: '', component: TeamHomeComponent},
  { path: 'new', component: TeamNewComponent },
  { path: ':id', component: TeamDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Team-detail-permissions'
      }
    }
  },{
    path: ':team_id/Car', loadChildren: () => import('../Car/Car.module').then(m => m.CarModule),
    data: {
        oPermission: {
            permissionId: 'Car-detail-permissions'
        }
    }
},{
    path: ':team_id/Driver', loadChildren: () => import('../Driver/Driver.module').then(m => m.DriverModule),
    data: {
        oPermission: {
            permissionId: 'Driver-detail-permissions'
        }
    }
},{
    path: ':team_id/TeamSponsor', loadChildren: () => import('../TeamSponsor/TeamSponsor.module').then(m => m.TeamSponsorModule),
    data: {
        oPermission: {
            permissionId: 'TeamSponsor-detail-permissions'
        }
    }
}
];

export const TEAM_MODULE_DECLARATIONS = [
    TeamHomeComponent,
    TeamNewComponent,
    TeamDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }