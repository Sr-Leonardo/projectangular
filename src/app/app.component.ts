import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TransactionService } from './services/trasction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularprojectbdb';

  constructor(private router: Router, private service: TransactionService) { }

  getClients() {
    this.router.navigate(["get"]);
  }

  doTransaction() {
    this.router.navigate(["transaction"]);
  }
}
