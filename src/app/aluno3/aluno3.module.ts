import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aluno3PageRoutingModule } from './aluno3-routing.module';

import { Aluno3Page } from './aluno3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aluno3PageRoutingModule
  ],
  declarations: [Aluno3Page]
})
export class Aluno3PageModule {}
