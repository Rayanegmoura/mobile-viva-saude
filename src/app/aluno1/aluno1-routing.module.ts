import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aluno1Page } from './aluno1.page';

const routes: Routes = [
  {
    path: '',
    component: Aluno1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aluno1PageRoutingModule {}
