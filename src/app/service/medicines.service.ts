import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Medicine } from "../models/medicine";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  private baseURL = `${environment.apiURL}/medicines`;

  constructor(private http: HttpClient) {
  }

  saveMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(`${this.baseURL}`, medicine);
  }

  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.baseURL}`);
  }

  getMedicineById(id: number): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.baseURL}/${id}`);
  }

  updateMedicine(id: number, medicine: Medicine): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, medicine);
  }

  deleteMedicine(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}

