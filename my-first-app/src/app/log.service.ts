import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  public messages : Array<string> = ['First message', 'Second Message']

  constructor() { }

  addMessage(message:string){
    this.messages.push(message);
  }
}
