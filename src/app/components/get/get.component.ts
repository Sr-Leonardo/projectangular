import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { PersonServiceService } from 'src/app/services/person-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  people: Person[] = [];

  constructor(private service: PersonServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.service.getPeople().subscribe(data => {
      if (data.length > 0)
        this.people = data;
      else
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'No data to display'
        });
    });
  }

  delete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(id).subscribe(
          (res) => {
            Swal.fire(
              'Deleted!',
              'The person has been deleted.',
              'success'
            )
            this.getPeople();
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.text
            });
          }
        );
      }
    })


  }

}
