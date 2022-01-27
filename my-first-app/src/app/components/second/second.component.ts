import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']

})
export class SecondComponent implements OnInit {

  constructor(public logService : LogService) { }

  ngOnInit(): void {
  }

  addSampleMessage(){
    this.logService.addMessage('sample message')
  }

}
