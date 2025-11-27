import { Routes } from '@angular/router';
import { App } from './app';
import { Busqueda } from './componentes/busqueda/busqueda';
import { NotFound } from './componentes/not-found/not-found';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'busqueda', component: Busqueda },
    
    { path: '**', component: NotFound }
];
