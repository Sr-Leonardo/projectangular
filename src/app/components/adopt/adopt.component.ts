import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { PersonServiceService } from 'src/app/services/person-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  children: Person[] = [];

  constructor(private service: PersonServiceService, private router: Router) { }

  ngOnInit(): void {

    this.service.getChildren().subscribe(data => {
      this.children = data;
    });

  }

  adopt(person: Person) {
    this.service.adopt(person).subscribe(data => {
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
      this.router.navigate(["get"]);
    })
  }

}
