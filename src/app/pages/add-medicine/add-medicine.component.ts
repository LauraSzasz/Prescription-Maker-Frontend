import { Component } from '@angular/core';
import { Medicine } from '../../models/medicine';
import { AdministrationMethod } from '../../models/enums/administration-method';
import { MedicinesService } from "../../service/medicines.service";
import { NavigationService } from '../../service/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent {

  medicine = new Medicine();
  administrationMethod = Object.values(AdministrationMethod);

  constructor(
    private medicineService: MedicinesService,
    private navigation: NavigationService,
    private router: Router
  ) {}

  onSubmit() {
    this.medicineService.saveMedicine(this.medicine).subscribe(data =>{
      console.log(data);
      this.navigation.goToMedicinesPage();
    }, error => console.log(error));
  }

}
