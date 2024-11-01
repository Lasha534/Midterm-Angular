import { Component } from '@angular/core';
import { ParentUser } from './Interfaces/parent-user';
import { User } from './Interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lasha Jumushadze';
  people=[
    {
      firstname: 'Vano',
      lastname: 'Gachava',
      age: 15
    },
    {
      firstname: 'Nikoloz',
      lastname: 'Gabruashvili',
      age: 23
    },
    {
      firstname: 'Giorgi',
      lastname: 'Bagaturi',
      age: 43
    },
    {
      firstname: 'Luka',
      lastname: 'Maghradze',
      age: 17
    },
    {
      firstname: 'Jemal',
      lastname: 'Bagashvili',
      age: 75
    },
  ]

  parentPeople: ParentUser[]=[
    {
      id: 45423452,
      Firstname: 'Gocha',
      Lastname: 'Mandaria',
      DateOfBirth: 1964,
      PhoneNumber: 557396678,
      Email: 'gochmand@gmail.com'
    },
    {
      id: 89756478,
      Firstname: 'Nikoloz',
      Lastname: 'Jamburia',
      DateOfBirth: 1975,
      PhoneNumber: 599324525,
      Email: 'Nikojamb@gmail.com'
    },
    {
      id: 93840586,
      Firstname: 'Barbare',
      Lastname: 'Kipshidze',
      DateOfBirth: 2003,
      PhoneNumber: 568566788,
      Email: 'Barbabkipn@gmail.com'
    },
  ]

  readData: any;

  inputData:any;

  parentFunction(data:any){
    this.inputData=data;
  }

  newperson: User=
    {
      id: 0,
      Firstname: '',
      Lastname: '',
      DateOfBirth: 0,
      PhoneNumber: 0,
      Email: ''
    }
  peoples: User[]=[];
  addPerson(){
    this.peoples.push(this.newperson);
    this.newperson={
      id: 0,
      Firstname: '',
      Lastname: '',
      DateOfBirth: 0,
      PhoneNumber: 0,
      Email: ''
    }
  }
}
