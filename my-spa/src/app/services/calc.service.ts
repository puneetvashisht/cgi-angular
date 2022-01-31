import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  add(x: number, y : number): number{
    return x + y;
  }
}
