import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ServiceComponent } from './service/service.component';




export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'signup', loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent) },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'shop', component: ProductsPageComponent },
  { path: 'shop/:category', component: CategoryPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop/:category/:id', component: ProductDetailComponent },
  { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent) },
  {path:'privacy',component: PrivacyComponent},
  {path:'service',component:ServiceComponent}


];


