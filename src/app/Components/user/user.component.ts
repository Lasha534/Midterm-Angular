import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { ChildUser } from '../../Interfaces/child-user';
import { DisplayService } from '../../display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent{
  @Input() readData: any ='data';

  childpeople: ChildUser[]=[
    {
      id: 86940542,
      Firstname: 'Nato',
      Lastname: 'Gorgisheli',
      DateOfBirth: 1999,
      PhoneNumber: 599858823,
      Email: 'Natgor@gmail.com'
    },
    {
      id: 98813456,
      Firstname: 'Mixeil',
      Lastname: 'Saakashvili',
      DateOfBirth: 1951,
      PhoneNumber: 234996656,
      Email: 'Mixeilll@gmail.com'
    },
    {
      id: 97832378,
      Firstname: 'Vika',
      Lastname: 'Farulava',
      DateOfBirth: 2005,
      PhoneNumber: 599548388,
      Email: 'VikFar@gmail.com'
    }
  ]
  
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  sendData(){
    this.parentFunction.emit(this.childpeople);
  }

  constructor(private displayService: DisplayService){}
  Display(){
    this.displayService.Log(this.childpeople);
  }
}
