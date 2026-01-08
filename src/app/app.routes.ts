import { Routes } from '@angular/router';
import { App } from './app';
import { ApiResource } from './componentes/api-resource/api-resource';
import { Busqueda } from './componentes/busqueda/busqueda';
import { CursosPaginacion } from './componentes/cursos-paginacion/cursos-paginacion';
import { NotFound } from './componentes/not-found/not-found';
import { Contenedor } from './componentes/signals/contenedor/contenedor';
import { Zona } from './componentes/zona/zona';
import { BusquedaBD } from './componentes/busqueda/busqueda-bd/busqueda-bd';
import { Repaso } from './componentes/observables/repaso/repaso';
import { forkJoin } from 'rxjs';
import { ForkJoin } from './componentes/observables/operadores/fork-join/fork-join';
import { Merge } from './componentes/observables/operadores/merge/merge';
import { Login } from './componentes/auth/login/login';
import { Cuentas } from './componentes/auth/cuentas/cuentas';
import { Alumnos } from './componentes/alumnos/alumnos';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'busqueda', component: Busqueda },
    { path: 'zona', component: Zona},
    { path: 'contenedor', component: Contenedor },
    { path: 'apiResource', component: ApiResource },
    { path: 'paginacion', component: CursosPaginacion },
    { path: 'busquedaBD', component: BusquedaBD },
    { path: 'observables', component: Repaso },
    { path: 'obsOpForkJoin', component: ForkJoin },
    { path: 'obsOpMerge', component: Merge },
    { path: 'login', component: Login },
    { path: 'cuentas', component: Cuentas },
    { path: 'alumnos', component: Alumnos },

    { path: '**', component: NotFound }
];
