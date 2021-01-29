import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

const baseUrl = 'http://localhost:8080/api/persons';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${baseUrl}/All`);
  }

  get(id: any): Observable<Person> {
    return this.http.get<Person>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
 //this.firstName,this.lastName,this.city,this.age)

  findByfirstName(firstName: any,lastName: any,age: any,city: any): Observable<Person[]> {
    return this.http.get<Person[]>(`${baseUrl}/getPersonByChosenCriteria?values=${firstName}&values=${lastName}&values=${age}&values=${city}`);
  }
}