import { ProductModalPage } from './../pages/product-modal/product-modal';
import { CategoriesPage } from './../pages/categories/categories';
import { WelcomePage } from './../pages/welcome/welcome';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';

import { NavComponent } from './../components/nav/nav';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StorePage } from '../pages/store/store';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsPage } from "../pages/products/products";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';






@NgModule({

  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    ListPage,
    StorePage,
    ProductsPage,
    NavComponent,
    CategoriesPage,
    ProductModalPage
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    WelcomePage,
    LoginPage,
    HomePage,
    ListPage,
    StorePage,
    ProductsPage,
    CategoriesPage,
    ProductModalPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,


  ]
})
export class AppModule {}
