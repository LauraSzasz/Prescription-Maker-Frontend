import {Component, OnInit} from '@angular/core';
import {Medicine} from "../models/medicine";
import {MedicinesService} from "../service/medicines.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import { style } from '@angular/animations';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  public medicine!: Medicine;
  public medicines!: Medicine[];
  public deleteMedicine!: Medicine;
  public counter = 0;


  constructor(private medicineService: MedicinesService,
              private  router: Router) {
  }

  ngOnInit(): void {
    this.getMedicines();
  }

  public getCounter(): number {
return this.counter++;
  }

  private getMedicines() {
    this.medicineService.getMedicines().subscribe(data => {
      this.medicines = data;
    })
  }

  updateMedicine(id: number) {
    this.router.navigate(['edit/:id', id])
  }

  public onDeleteMedicine(id: number): void {
    this.medicineService.deleteMedicine(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getMedicines();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openDelete(id:number) {
    Swal.fire({
      title: 'Delete medicine',
      text: 'Are you sure you want to delete this entry?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.onDeleteMedicine(id);
        Swal.fire(
          'Deleted!',
          'Your medicine entry has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
        )
      }
    })
  }


}
