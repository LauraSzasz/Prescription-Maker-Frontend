import { Component, OnInit } from '@angular/core';
import { MedicinesService } from '../../service/medicines.service';
import { Medicine } from '../../models/medicine';
import { ActivatedRoute } from '@angular/router';
import { AdministrationMethod } from '../../models/enums/administration-method';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})

export class EditMedicineComponent implements OnInit {
  id!: number;
  medicine: Medicine = new Medicine();
  administrationMethod = Object.values(AdministrationMethod);


  constructor(
    private medicineService: MedicinesService,
    private navigation: NavigationService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data => {
      console.log(data);
      this.medicine = data;
    }, error => console.log(error));
  }

  onSubmit(): void {
    this.medicineService.updateMedicine(this.id, this.medicine).subscribe(data => {
      console.log(data);
      this.navigation.goToMedicinesPage();
    }, error => console.log(error));
  }

}
