import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aluno3Page } from './aluno3.page';

const routes: Routes = [
  {
    path: '',
    component: Aluno3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aluno3PageRoutingModule {}
