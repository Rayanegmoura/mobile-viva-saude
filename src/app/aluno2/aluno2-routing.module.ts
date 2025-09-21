import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aluno2Page } from './aluno2.page';

const routes: Routes = [
  {
    path: '',
    component: Aluno2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aluno2PageRoutingModule {}
