import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { PersonServiceService } from 'src/app/services/person-service.service';
import Swal from'sweetalert2';


@Component({
  selector: 'app-add-mother',
  templateUrl: './add-mother.component.html',
  styleUrls: ['./add-mother.component.css']
})
export class AddMotherComponent implements OnInit {

  modelPerson : Person = new Person();

  constructor(private router:Router, private service:PersonServiceService) { }

  ngOnInit(): void {
  }

  createMother(person:Person){
    this.service.adopt(person).subscribe( data =>{
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
      this.router.navigate(["get"]);
    })
  }

}
