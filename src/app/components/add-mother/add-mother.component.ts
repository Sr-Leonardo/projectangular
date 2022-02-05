import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { PersonModel } from 'src/app/models/PersonModel';
import { PersonServiceService } from 'src/app/services/person-service.service';
import Swal from'sweetalert2';


@Component({
  selector: 'app-add-mother',
  templateUrl: './add-mother.component.html',
  styleUrls: ['./add-mother.component.css']
})
export class AddMotherComponent implements OnInit {

  modelPerson : PersonModel = new PersonModel();

  constructor(private router:Router, private service:PersonServiceService) { }

  ngOnInit(): void {
  }

  createMother(person:PersonModel){
    this.service.addMother(person).subscribe( data =>{
      Swal.fire({
        icon: 'success',
        title: 'Mother has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(["get"]);
    })
  }

}
