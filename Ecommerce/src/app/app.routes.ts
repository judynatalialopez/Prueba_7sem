import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'info-usuario',
    loadComponent: () => import('./pager/info-usuario/info-usuario.page').then( m => m.InfoUsuarioPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pager/home/home.page').then( m => m.HomePage)
  },  {
    path: 'list',
    loadComponent: () => import('./pager/list/list.page').then( m => m.ListPage)
  },

  

];
