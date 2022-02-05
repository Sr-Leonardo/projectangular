import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { PersonModel } from 'src/app/models/PersonModel';
import { PersonServiceService } from 'src/app/services/person-service.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-add-father',
  templateUrl: './add-father.component.html',
  styleUrls: ['./add-father.component.css']
})
export class AddFatherComponent implements OnInit {

  modelPerson : PersonModel = new PersonModel();

  constructor(private router:Router, private service:PersonServiceService) { }

  ngOnInit(): void {
  }

  createFather(person:PersonModel){
    this.service.addFather(person).subscribe( data =>{
      Swal.fire({
        icon: 'success',
        title: 'Father has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(["get"]);
    })
  }

}
