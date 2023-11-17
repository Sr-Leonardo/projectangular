import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDto } from 'src/app/models/client';
import { TransactionService } from 'src/app/services/trasction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  clients: ClientDto[] = [];

  constructor(private service: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.service.getCients().subscribe(data => {
      if (data.length > 0)
        this.clients = data;
      else
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'No data to display'
        });
    });
  }
}
