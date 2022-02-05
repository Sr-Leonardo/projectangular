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
    this.getChildren();
  }

  getChildren(){
    this.service.getChildren().subscribe(data => {
      if (data.length > 0)
        this.children = data;
      else
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'No data to display'
        });
    });
  }

  adopt(idChild: number) {
    this.service.adopt(idChild).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Child adopted',
        showConfirmButton: false,
        timer: 1500
      });
      this.getChildren();
    })
  }

}
