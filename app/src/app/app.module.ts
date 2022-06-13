import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PokeapiComponent } from './components/pokeapi/pokeapi.component';
import { BooksComponent } from './components/books/books.component';
import { ErrorCatchingInterceptor } from './interceptors/error-catching.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CreateBookComponent } from './components/books/modals/create-book/create-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PokeapiComponent,
    BooksComponent,
    SigninFormComponent,
    SignupFormComponent,
    NavBarComponent,
    CreateBookComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
