import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorHomeComponent } from './home/Sponsor-home.component';
import { SponsorNewComponent } from './new/Sponsor-new.component';
import { SponsorDetailComponent } from './detail/Sponsor-detail.component';

const routes: Routes = [
  {path: '', component: SponsorHomeComponent},
  { path: 'new', component: SponsorNewComponent },
  { path: ':id', component: SponsorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Sponsor-detail-permissions'
      }
    }
  },{
    path: ':sponsor_id/TeamSponsor', loadChildren: () => import('../TeamSponsor/TeamSponsor.module').then(m => m.TeamSponsorModule),
    data: {
        oPermission: {
            permissionId: 'TeamSponsor-detail-permissions'
        }
    }
}
];

export const SPONSOR_MODULE_DECLARATIONS = [
    SponsorHomeComponent,
    SponsorNewComponent,
    SponsorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorRoutingModule { }