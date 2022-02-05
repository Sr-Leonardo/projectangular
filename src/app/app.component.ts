import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonServiceService } from './services/person-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularprojectbdb';

  constructor(private router: Router, private service: PersonServiceService) {

  }

  getPeople() {
    this.router.navigate(["get"]);
  }

  getChildren() {
    this.router.navigate(["adopt"]);
  }

  createChild() {
    this.router.navigate(["addChild"]);
  }

  existMother() {
    this.service.existMother().subscribe(res => {
      if (res.match("OK"))
        this.router.navigate(["addMother"]);
      else
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.toString()
        })
    });
  }

  existFather() {
    // this.service.existFather().subscribe(res => {
    //   if (res.match("OK"))
    //     this.router.navigate(["addFather"]);
    //   else
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: ''
    //     })
    // });

    this.service.existFather().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.text
          });
      }
    );

    const locationsSubscription = this.service.existFather().subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });

    console.log(locationsSubscription);


  }


}
