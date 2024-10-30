import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitWeatherHomeComponent } from './home/CircuitWeather-home.component';
import { CircuitWeatherNewComponent } from './new/CircuitWeather-new.component';
import { CircuitWeatherDetailComponent } from './detail/CircuitWeather-detail.component';

const routes: Routes = [
  {path: '', component: CircuitWeatherHomeComponent},
  { path: 'new', component: CircuitWeatherNewComponent },
  { path: ':id', component: CircuitWeatherDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CircuitWeather-detail-permissions'
      }
    }
  }
];

export const CIRCUITWEATHER_MODULE_DECLARATIONS = [
    CircuitWeatherHomeComponent,
    CircuitWeatherNewComponent,
    CircuitWeatherDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircuitWeatherRoutingModule { }