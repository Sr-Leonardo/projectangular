import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonModel } from 'src/app/models/PersonModel';
import { PersonServiceService } from 'src/app/services/person-service.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {

  modelPerson : PersonModel = new PersonModel();

  constructor(private router:Router, private service:PersonServiceService) { }

  ngOnInit(): void {
  }

  createChild(person:PersonModel){
    this.service.addChild(person).subscribe( data =>{
      Swal.fire('Done!', 'You submitted succesfully!', 'success')
      this.router.navigate(["get"]);
    })
  }

}
