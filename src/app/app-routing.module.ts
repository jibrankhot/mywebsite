import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component'; // ✅ Layout wrapper

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // ✅ Wrap these routes with main layout
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then(m => m.BlogModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
