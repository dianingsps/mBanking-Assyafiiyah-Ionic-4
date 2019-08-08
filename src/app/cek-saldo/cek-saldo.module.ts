import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CekSaldoPage } from './cek-saldo.page';

const routes: Routes = [
  {
    path: '',
    component: CekSaldoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CekSaldoPage]
})
export class CekSaldoPageModule {}
