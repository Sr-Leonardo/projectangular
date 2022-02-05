import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChildComponent } from './components/add-child/add-child.component';
import { AddFatherComponent } from './components/add-father/add-father.component';
import { AddMotherComponent } from './components/add-mother/add-mother.component';
import { AdoptComponent } from './components/adopt/adopt.component';
import { GetComponent } from './components/get/get.component';

const routes: Routes = [
  {path : 'get', component : GetComponent},
  {path : 'adopt', component : AdoptComponent},
  {path : 'addFather', component : AddFatherComponent},
  {path : 'addMother', component : AddMotherComponent},
  {path : 'addChild', component : AddChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
