import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
// import { ReactiveFormsModule } from "@angular/forms";

import { CoreModule } from './core/core.module';
import { ListModule } from './list/list.module';
import { HomeModule } from './home/home.module';
import { AuthorizationModule } from './authorization/authorization.module';


import { CanActivateList } from './list/canActivateList.guard';

import { AuthInterceptor } from './authorization/auth-interceptor';
import { ReducerModule } from './store/reducer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(ReducerModule),
    HttpClientModule,
    CoreModule,
    ListModule,
    HomeModule,
    AuthorizationModule,
    // ReactiveFormsModule
  ],
  providers: [
    CanActivateList,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
