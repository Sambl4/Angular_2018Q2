import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
// import { ReactiveFormsModule } from "@angular/forms";

import { CoreModule } from './core/core.module';
import { ListModule } from './list/list.module';
import { HomeModule } from './home/home.module';
import { AuthorizationModule } from './authorization/authorization.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    CoreModule,
    ListModule,
    HomeModule,
    AuthorizationModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
