import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MedicinesComponent} from "./medicines/medicines.component";
import {AddMedicineComponent} from "./medicines/add-medicine/add-medicine.component";
import {EditMedicineComponent} from "./medicines/edit-medicine/edit-medicine.component";

const routes: Routes = [
  {path: '', component: MedicinesComponent},
  {path: 'add', component: AddMedicineComponent},
  {path: 'edit/:id', component: EditMedicineComponent},
  {path: '**', component: MedicinesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
