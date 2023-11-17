import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/clientTransaction';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/trasction.service';
import Swal from 'sweetalert2';
import { TransactionDto } from 'src/app/models/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  model : TransactionDto = new TransactionDto();

  constructor(private router:Router, private service:TransactionService) { }

  ngOnInit(): void {
  }

  handleTransaction(transaction: TransactionDto){
    this.service.updateClientAmount(transaction).subscribe( data =>{
      if (data){
        Swal.fire({
          icon: 'success',
          title: 'Transaction was success',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(["get"]);
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });
      }

    })
  }
}
