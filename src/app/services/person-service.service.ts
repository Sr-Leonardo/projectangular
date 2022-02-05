import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Person } from '../models/Person';
import { PersonModel } from '../models/PersonModel';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/person/'

  getPeople() {
    return this.http.get<Person[]>(this.Url);
  }

  getChildren() {
    return this.http.get<Person[]>(`${this.Url}getChildren`);
  }

  adopt(person: Person) {
    return this.http.post<Person>(this.Url, person);
  }

  existMother() {
    return this.http.get<String>(`${this.Url}getMother`)
  }

  addChild(person: PersonModel) {
    return this.http.post(`${this.Url}addChild`, person);
  }

  delete(id: number) {
    return this.http.delete(`${this.Url}delete/${id}`);
  }

  existFather() {
    return this.http.get<boolean>(`${this.Url}getFather`);
  }
}
