import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpConfigInterceptor } from './interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
