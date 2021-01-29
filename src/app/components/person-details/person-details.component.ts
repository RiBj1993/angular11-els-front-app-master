import { Component, OnInit } from '@angular/core';
import {PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  currentPerson: Person = {
    firstName: '',
    lastName: '',
    age: 0,
    city:'', 
    registrationNumber :''
  };
  message = '';

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getperson(this.route.snapshot.params.id);
  }

  getperson(id: string): void {
    this.personService.get(id)
      .subscribe(
        data => {
          this.currentPerson = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      firstName: this.currentPerson.firstName,
      lastName: this.currentPerson.lastName,
      age: this.currentPerson.age
    };

    this.personService.update(this.currentPerson._id, data)
      .subscribe(
        response => {
          this.currentPerson.age = response.age;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updatePerson(): void {
    this.personService.update(this.currentPerson._id, this.currentPerson)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deletePerson(): void {
    this.personService.delete(this.currentPerson._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/persons']);
        },
        error => {
          console.log(error);
        });
  }
}