import { MenuRootItem } from 'ontimize-web-ngx';

import { CarCardComponent } from './Car-card/Car-card.component';

import { CircuitCardComponent } from './Circuit-card/Circuit-card.component';

import { CircuitWeatherCardComponent } from './CircuitWeather-card/CircuitWeather-card.component';

import { DriverCardComponent } from './Driver-card/Driver-card.component';

import { LapTimeCardComponent } from './LapTime-card/LapTime-card.component';

import { PenaltyCardComponent } from './Penalty-card/Penalty-card.component';

import { QualificationCardComponent } from './Qualification-card/Qualification-card.component';

import { RaceCardComponent } from './Race-card/Race-card.component';

import { RaceResultCardComponent } from './RaceResult-card/RaceResult-card.component';

import { SponsorCardComponent } from './Sponsor-card/Sponsor-card.component';

import { TeamCardComponent } from './Team-card/Team-card.component';

import { TeamSponsorCardComponent } from './TeamSponsor-card/TeamSponsor-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Car', name: 'CAR', icon: 'view_list', route: '/main/Car' }
    
        ,{ id: 'Circuit', name: 'CIRCUIT', icon: 'view_list', route: '/main/Circuit' }
    
        ,{ id: 'CircuitWeather', name: 'CIRCUITWEATHER', icon: 'view_list', route: '/main/CircuitWeather' }
    
        ,{ id: 'Driver', name: 'DRIVER', icon: 'view_list', route: '/main/Driver' }
    
        ,{ id: 'LapTime', name: 'LAPTIME', icon: 'view_list', route: '/main/LapTime' }
    
        ,{ id: 'Penalty', name: 'PENALTY', icon: 'view_list', route: '/main/Penalty' }
    
        ,{ id: 'Qualification', name: 'QUALIFICATION', icon: 'view_list', route: '/main/Qualification' }
    
        ,{ id: 'Race', name: 'RACE', icon: 'view_list', route: '/main/Race' }
    
        ,{ id: 'RaceResult', name: 'RACERESULT', icon: 'view_list', route: '/main/RaceResult' }
    
        ,{ id: 'Sponsor', name: 'SPONSOR', icon: 'view_list', route: '/main/Sponsor' }
    
        ,{ id: 'Team', name: 'TEAM', icon: 'view_list', route: '/main/Team' }
    
        ,{ id: 'TeamSponsor', name: 'TEAMSPONSOR', icon: 'view_list', route: '/main/TeamSponsor' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CarCardComponent

    ,CircuitCardComponent

    ,CircuitWeatherCardComponent

    ,DriverCardComponent

    ,LapTimeCardComponent

    ,PenaltyCardComponent

    ,QualificationCardComponent

    ,RaceCardComponent

    ,RaceResultCardComponent

    ,SponsorCardComponent

    ,TeamCardComponent

    ,TeamSponsorCardComponent

];