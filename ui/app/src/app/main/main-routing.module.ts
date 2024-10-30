import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Car', loadChildren: () => import('./Car/Car.module').then(m => m.CarModule) },
    
        { path: 'Circuit', loadChildren: () => import('./Circuit/Circuit.module').then(m => m.CircuitModule) },
    
        { path: 'CircuitWeather', loadChildren: () => import('./CircuitWeather/CircuitWeather.module').then(m => m.CircuitWeatherModule) },
    
        { path: 'Driver', loadChildren: () => import('./Driver/Driver.module').then(m => m.DriverModule) },
    
        { path: 'LapTime', loadChildren: () => import('./LapTime/LapTime.module').then(m => m.LapTimeModule) },
    
        { path: 'Penalty', loadChildren: () => import('./Penalty/Penalty.module').then(m => m.PenaltyModule) },
    
        { path: 'Qualification', loadChildren: () => import('./Qualification/Qualification.module').then(m => m.QualificationModule) },
    
        { path: 'Race', loadChildren: () => import('./Race/Race.module').then(m => m.RaceModule) },
    
        { path: 'RaceResult', loadChildren: () => import('./RaceResult/RaceResult.module').then(m => m.RaceResultModule) },
    
        { path: 'Sponsor', loadChildren: () => import('./Sponsor/Sponsor.module').then(m => m.SponsorModule) },
    
        { path: 'Team', loadChildren: () => import('./Team/Team.module').then(m => m.TeamModule) },
    
        { path: 'TeamSponsor', loadChildren: () => import('./TeamSponsor/TeamSponsor.module').then(m => m.TeamSponsorModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }