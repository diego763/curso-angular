import { Route } from "@angular/router";
import { CrearUsuarioComponent } from "./subpaginas/crear-usuario/crear-usuario.component";

export const MOD_USUARIO_USUARIO_ROUTES: Route[] = [
  {
    path: 'crear',
    component: CrearUsuarioComponent
    // loadChildren: () => import('./subpaginas/crear-usuario/crear-usuario.module').then(m => m.CrearUsuarioModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./subpaginas/lista-usuarios/lista-usuarios.module').then(m => m.ListaUsuariosModule)
  }
]