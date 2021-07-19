import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compoments/navbar/navbar.component';
import { MedicinesComponent } from './pages/medicines/medicines.component';
import { AddMedicineComponent } from './pages/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './pages/edit-medicine/edit-medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MedicinesComponent,
    AddMedicineComponent,
    EditMedicineComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
