import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StarComponent } from '../app/shared/star.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFilterPipe } from './products/product-filter.pipe'
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component'
import { APP_BASE_HREF } from '@angular/common';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true })
    , BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, WelcomeComponent, ProductListComponent, StarComponent, ProductFilterPipe, ProductDetailComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }
