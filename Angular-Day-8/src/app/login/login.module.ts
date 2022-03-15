import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    AngularFireModule
  ]
})
export class LoginModule { }
