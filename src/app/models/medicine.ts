import {AdministrationMethod} from "./administration-method";

export class Medicine {
  id!: number;
  brandName!: string;
  chemicalName!: string;
  posology!: string;
  quantity!:number;
  administrationMethod!: AdministrationMethod;
}
