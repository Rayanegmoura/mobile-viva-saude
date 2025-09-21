import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'aluno1',
    loadChildren: () => import('./aluno1/aluno1.module').then( m => m.Aluno1PageModule)
  },
  {
    path: 'aluno2',
    loadChildren: () => import('./aluno2/aluno2.module').then( m => m.Aluno2PageModule)
  },
  {
    path: 'aluno3',
    loadChildren: () => import('./aluno3/aluno3.module').then( m => m.Aluno3PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
