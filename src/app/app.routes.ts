import { Routes } from '@angular/router';
import { App } from './app';
import { ApiResource } from './componentes/api-resource/api-resource';
import { Busqueda } from './componentes/busqueda/busqueda';
import { CursosPaginacion } from './componentes/cursos-paginacion/cursos-paginacion';
import { NotFound } from './componentes/not-found/not-found';
import { Contenedor } from './componentes/signals/contenedor/contenedor';
import { Zona } from './componentes/zona/zona';
//import { BusquedaBD } from './componentes/busqueda/busqueda-bd/busqueda-bd';
import { Repaso } from './componentes/observables/repaso/repaso';
import { forkJoin } from 'rxjs';
import { ForkJoin } from './componentes/observables/operadores/fork-join/fork-join';
import { Merge } from './componentes/observables/operadores/merge/merge';
import { Login } from './componentes/auth/login/login';
import { Cuentas } from './componentes/auth/cuentas/cuentas';
import { Alumnos } from './componentes/alumnos/alumnos';
import { authGuard } from './guards/auth-guard';
import { Padre } from './componentes/auth-parent/padre/padre';
import { Hijo } from './componentes/auth-parent/hijo/hijo';
import { vipGuard } from './guards/vip-guard';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'busqueda', component: Busqueda, 
//        canMatch: [vipGuard], 
    },
    { path: 'zona', component: Zona},
    { path: 'contenedor', component: Contenedor },
    { path: 'apiResource', component: ApiResource },
    { path: 'paginacion', component: CursosPaginacion },
    { path: 'busquedaBD', 
        loadComponent: () => import('./componentes/busqueda/busqueda-bd/busqueda-bd').then(m => m.BusquedaBD),
        canMatch: [vipGuard]
    },
    { path: 'observables', component: Repaso },
    { path: 'obsOpForkJoin', component: ForkJoin },
    { path: 'obsOpMerge', component: Merge },
    { path: 'login', component: Login },
    { path: 'cuentas', component: Cuentas, canActivate: [authGuard] },
    { path: 'alumnos', component: Alumnos },
//    { path: 'authPadre', component: Padre, canActivate: [authGuard], 
//    { path: 'authPadre', component: Padre, canActivateChild: [authGuard], 
    { path: 'authPadre', component: Padre,
        children: [
            { path: 'authHijo', component: Hijo, canMatch: [authGuard] },
            { path: 'cuentas', component: Cuentas }
        ]
    },

    { path: '**', component: NotFound }
];
