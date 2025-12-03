import { Routes } from '@angular/router';
import { App } from './app';
import { Busqueda } from './componentes/busqueda/busqueda';
import { NotFound } from './componentes/not-found/not-found';
import { Zona } from './componentes/zona/zona';
import { Contenedor } from './componentes/signals/contenedor/contenedor';
import { ApiResource } from './componentes/api-resource/api-resource';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'busqueda', component: Busqueda },
    { path: 'zona', component: Zona},
    { path: 'contenedor', component: Contenedor },
    { path: 'apiResource', component: ApiResource },

    { path: '**', component: NotFound }
];
