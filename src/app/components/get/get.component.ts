import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { PersonServiceService } from 'src/app/services/person-service.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  people: Person[] = [];

  constructor(private service:PersonServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(){
    this.service.getPeople().subscribe( data=> {
      this.people = data;
    });
  }

  delete(id:number){

  }

}
