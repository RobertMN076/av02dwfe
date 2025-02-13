import { Routes } from '@angular/router';
import { PilotosComponent } from './pages/pilotos/pilotos.component';
import { EquipesComponent } from './pages/equipes/equipes.component';
import { CircuitosComponent } from './pages/circuitos/circuitos.component';
import { HistoriasComponent } from './pages/historias/historias.component';
import { Marco1950Component } from './pages/marco1950/marco1950.component';
import { Marco1972Component } from './pages/marco1972/marco1972.component';
import { Marco1988Component } from './pages/marco1988/marco1988.component';
import { Marco2000Component } from './pages/marco2000/marco2000.component';
import { Marco2021Component } from './pages/marco2021/marco2021.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },

    {
        path: 'pilotos',
        title: 'Pilotos',
        component: PilotosComponent
    },

    {
        path: 'equipes',
        title: 'Equipes',
        component: EquipesComponent
    },

    {
        path: 'circuitos',
        title: 'Circuitos',
        component: CircuitosComponent
    },

    {
        path: 'historias',
        title: 'Historias',
        component: HistoriasComponent
    },

    {
        path: 'marco1950',
        component: Marco1950Component
    },

    {
        path: 'marco1972',
        component: Marco1972Component
    },

    {
        path: 'marco1988',
        component: Marco1988Component
    },

    {
        path: 'marco2000',
        component: Marco2000Component
    },

    {
        path: 'marco2021',
        component: Marco2021Component
    },
];
