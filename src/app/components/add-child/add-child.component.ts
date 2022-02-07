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
    this.service.validatePerson(person).subscribe( res =>{
      if (res){
        this.service.addChild(person).subscribe( data =>{
          Swal.fire({
            icon: 'success',
            title: 'Child has been saved',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(["get"]);
        })
      }else{
        Swal.fire({
          icon: 'info',
          title: 'Sorry..',
          text: 'There is already a child with this information.'
        });
      }
    });
    
  }

}
