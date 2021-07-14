import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  public goToMedicinesPage() {
    this.router.navigate(['/medicines']).then(nav => {
    }, err => {
      console.log(err)
    });
  }
}
