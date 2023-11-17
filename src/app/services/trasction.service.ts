import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ClientDto } from '../models/client';
import { TransactionDto } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  Url = 'https://localhost:7197/transactions/'
  ClientUrl = 'https://localhost:7197/clients'

  getCients() {
    return this.http.get<ClientDto[]>(`${this.ClientUrl}`);
  }

  getTransaction() {
    return this.http.get<ClientDto>(`${this.Url}`);
  }

  updateClientAmount(transaction: TransactionDto) {
    return this.http.post(`${this.Url}`, transaction);
  }

}
