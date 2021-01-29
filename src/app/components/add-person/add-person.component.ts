import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  person: Person = {
 //  _id : 10 * Math.random(),
    firstName: '',
    lastName: '',
	 age: 0,
	 city: '',
	 registrationNumber : ''
	 };
  submitted = false
   
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  savePerson(): void {
    const data = {
   //   _id : 10 * Math.random(),
	 firstName: this.person.firstName,
    lastName: this.person.lastName,
	 age: this.person.age,
	 city: this.person.city,
	 registrationNumber : this.person.registrationNumber
    };

    this.personService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPerson(): void {
    this.submitted = false;
    this.person = {
      //_id : 10 * Math.random(),
		 firstName: '',
    lastName: '',
	 age: 0,
	 city: '',
	 registrationNumber : '' 
    };
  }

}