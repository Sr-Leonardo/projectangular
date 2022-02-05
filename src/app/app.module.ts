import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetComponent } from './components/get/get.component';
import { AdoptComponent } from './components/adopt/adopt.component';
import { PersonServiceService } from './services/person-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddFatherComponent } from './components/add-father/add-father.component';
import { AddMotherComponent } from './components/add-mother/add-mother.component';
import { AddChildComponent } from './components/add-child/add-child.component';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    AdoptComponent,
    AddFatherComponent,
    AddMotherComponent,
    AddChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
