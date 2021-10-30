import { ModPublicoComponent } from './mod-publico.component';

import { Route } from "@angular/router";
import { ContactoComponent } from "./paginas/contacto/contacto.component";
import { InicioComponent } from "./paginas/inicio/inicio.component";

export const MOD_PUBLICO_ROUTES: Route[] = [
  {
    path: '',
    component: ModPublicoComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
      {
        path: 'inicio-sesion',
        loadChildren: () => import('./paginas/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionModule)
      },
      {
        path: '404',
        loadChildren: () => import('./paginas/error-not-found/error-not-found.module').then(m => m.ErrorNotFoundModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('./paginas/registro/registro.module').then(m => m.RegistroModule)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'inicio'
      }
    ]
  }
]