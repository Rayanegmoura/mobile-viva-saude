import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aluno2PageRoutingModule } from './aluno2-routing.module';

import { Aluno2Page } from './aluno2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aluno2PageRoutingModule
  ],
  declarations: [Aluno2Page]
})
export class Aluno2PageModule {}
