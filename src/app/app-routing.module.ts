import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'cashier', loadChildren: () => import('./cashier/cashier.module').then(m => m.CashierModule) },
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'index', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'kitchen', loadChildren: () => import('./kitchen/kitchen.module').then(m => m.KitchenModule) },
  { path: 'manufactured', loadChildren: () => import('./manufactured/manufactured.module').then(m => m.ManufacturedModule) },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: 'my-profile', loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule) },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'supplies', loadChildren: () => import('./supplies/supplies.module').then(m => m.SuppliesModule) },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
