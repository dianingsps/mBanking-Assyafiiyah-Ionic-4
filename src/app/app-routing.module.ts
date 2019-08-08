import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'cek-saldo', loadChildren: './cek-saldo/cek-saldo.module#CekSaldoPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'mutasi', loadChildren: './mutasi/mutasi.module#MutasiPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'service', loadChildren: './service/service.module#ServicePageModule' },
  { path: 'sidemenu', loadChildren: './sidemenu/sidemenu.module#SidemenuPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
