import {Component, OnInit} from '@angular/core';
import {Medicine} from "../../models/medicine";
import {AdministrationMethod} from "../../models/administration-method";
import {MedicinesService} from "../../service/medicines.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicine: Medicine = new Medicine();
  administrationMethod = Object.values(AdministrationMethod);

  constructor(private medicineService: MedicinesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
  this.medicineService.saveMedicine(this.medicine).subscribe(data =>{
    console.log(data);
    this.goToMedicinesPage();
  }, error => console.log(error));
  }

  goToMedicinesPage() {
    this.router.navigate(['/medicines']).then(nav => {
      console.log(nav);console.log("go to medicines page")

    }, err => {
      console.log(err)
    });
  }
}
