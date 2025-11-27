import { Routes } from '@angular/router';
import { App } from './app';
import { Busqueda } from './componentes/busqueda/busqueda';
import { NotFound } from './componentes/not-found/not-found';
import { Zona } from './componentes/zona/zona';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'busqueda', component: Busqueda },
    { path: 'zona', component: Zona},

    { path: '**', component: NotFound }
];
