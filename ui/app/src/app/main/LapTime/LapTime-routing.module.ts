import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LapTimeHomeComponent } from './home/LapTime-home.component';
import { LapTimeNewComponent } from './new/LapTime-new.component';
import { LapTimeDetailComponent } from './detail/LapTime-detail.component';

const routes: Routes = [
  {path: '', component: LapTimeHomeComponent},
  { path: 'new', component: LapTimeNewComponent },
  { path: ':id', component: LapTimeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'LapTime-detail-permissions'
      }
    }
  }
];

export const LAPTIME_MODULE_DECLARATIONS = [
    LapTimeHomeComponent,
    LapTimeNewComponent,
    LapTimeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LapTimeRoutingModule { }