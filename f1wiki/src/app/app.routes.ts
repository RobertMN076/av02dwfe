import { Routes } from '@angular/router';
import { PilotosComponent } from './pages/pilotos/pilotos.component';
import { EquipesComponent } from './pages/equipes/equipes.component';
import { CircuitosComponent } from './pages/circuitos/circuitos.component';

export const routes: Routes = [
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
];
