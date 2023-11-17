import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './components/get/get.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  {path : 'get', component : GetComponent},
  {path : 'transaction', component : TransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
