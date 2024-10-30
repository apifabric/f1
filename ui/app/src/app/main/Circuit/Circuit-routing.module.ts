import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitHomeComponent } from './home/Circuit-home.component';
import { CircuitNewComponent } from './new/Circuit-new.component';
import { CircuitDetailComponent } from './detail/Circuit-detail.component';

const routes: Routes = [
  {path: '', component: CircuitHomeComponent},
  { path: 'new', component: CircuitNewComponent },
  { path: ':id', component: CircuitDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Circuit-detail-permissions'
      }
    }
  },{
    path: ':circuit_id/CircuitWeather', loadChildren: () => import('../CircuitWeather/CircuitWeather.module').then(m => m.CircuitWeatherModule),
    data: {
        oPermission: {
            permissionId: 'CircuitWeather-detail-permissions'
        }
    }
},{
    path: ':circuit_id/Race', loadChildren: () => import('../Race/Race.module').then(m => m.RaceModule),
    data: {
        oPermission: {
            permissionId: 'Race-detail-permissions'
        }
    }
}
];

export const CIRCUIT_MODULE_DECLARATIONS = [
    CircuitHomeComponent,
    CircuitNewComponent,
    CircuitDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircuitRoutingModule { }