import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualificationHomeComponent } from './home/Qualification-home.component';
import { QualificationNewComponent } from './new/Qualification-new.component';
import { QualificationDetailComponent } from './detail/Qualification-detail.component';

const routes: Routes = [
  {path: '', component: QualificationHomeComponent},
  { path: 'new', component: QualificationNewComponent },
  { path: ':id', component: QualificationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Qualification-detail-permissions'
      }
    }
  }
];

export const QUALIFICATION_MODULE_DECLARATIONS = [
    QualificationHomeComponent,
    QualificationNewComponent,
    QualificationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualificationRoutingModule { }