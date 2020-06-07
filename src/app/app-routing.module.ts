import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  { path: 'cashier', loadChildren: () => import('./pages/cashier/cashier.module').then(m => m.CashierModule) },
  { path: 'categories', loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'kitchen', loadChildren: () => import('./pages/kitchen/kitchen.module').then(m => m.KitchenModule) },
  { path: 'manufactured', loadChildren: () => import('./pages/manufactured/manufactured.module').then(m => m.ManufacturedModule) },
  { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule) },
  { path: 'my-profile', loadChildren: () => import('./pages/my-profile/my-profile.module').then(m => m.MyProfileModule) },
  { path: 'supplies', loadChildren: () => import('./pages/supplies/supplies.module').then(m => m.SuppliesModule) },
  {
    path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
    data: { visible: false }
  },
  {
    path: 'index', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule),
    data: { visible: false }
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
