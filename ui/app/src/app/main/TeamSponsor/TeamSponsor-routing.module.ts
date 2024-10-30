import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamSponsorHomeComponent } from './home/TeamSponsor-home.component';
import { TeamSponsorNewComponent } from './new/TeamSponsor-new.component';
import { TeamSponsorDetailComponent } from './detail/TeamSponsor-detail.component';

const routes: Routes = [
  {path: '', component: TeamSponsorHomeComponent},
  { path: 'new', component: TeamSponsorNewComponent },
  { path: ':id', component: TeamSponsorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TeamSponsor-detail-permissions'
      }
    }
  }
];

export const TEAMSPONSOR_MODULE_DECLARATIONS = [
    TeamSponsorHomeComponent,
    TeamSponsorNewComponent,
    TeamSponsorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamSponsorRoutingModule { }