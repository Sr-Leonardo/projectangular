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

  adopt(id: number) {
    return this.http.post(`${this.Url}`, id);
  }

  existMother() {
    return this.http.get<boolean>(`${this.Url}getMother`)
  }

  addChild(person: PersonModel) {
    return this.http.post(`${this.Url}addChild`, person);
  }

  addFather(person: PersonModel) {
    return this.http.post(`${this.Url}addFather`, person);
  }

  addMother(person: PersonModel) {
    return this.http.post(`${this.Url}addMother`, person);
  }

  delete(id: number) {
    return this.http.delete(`${this.Url}delete?id=${id}`);
  }

  existFather() {
    return this.http.get<boolean>(`${this.Url}getFather`);
  }
}
