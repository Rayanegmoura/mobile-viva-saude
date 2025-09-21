import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aluno1PageRoutingModule } from './aluno1-routing.module';

import { Aluno1Page } from './aluno1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aluno1PageRoutingModule
  ],
  declarations: [Aluno1Page]
})
export class Aluno1PageModule {}
