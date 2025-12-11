import { Routes } from '@angular/router';
import { App } from './app';
import { ApiResource } from './componentes/api-resource/api-resource';
import { Busqueda } from './componentes/busqueda/busqueda';
import { CursosPaginacion } from './componentes/cursos-paginacion/cursos-paginacion';
import { NotFound } from './componentes/not-found/not-found';
import { Contenedor } from './componentes/signals/contenedor/contenedor';
import { Zona } from './componentes/zona/zona';
import { BusquedaBD } from './componentes/busqueda/busqueda-bd/busqueda-bd';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'busqueda', component: Busqueda },
    { path: 'zona', component: Zona},
    { path: 'contenedor', component: Contenedor },
    { path: 'apiResource', component: ApiResource },
    { path: 'paginacion', component: CursosPaginacion },
    { path: 'busquedaBD', component: BusquedaBD },

    { path: '**', component: NotFound }
];
