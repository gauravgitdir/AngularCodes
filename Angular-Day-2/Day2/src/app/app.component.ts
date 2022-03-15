import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'angularday2';
  userList:any=[];
  collection = [];
  page: number = 1;
  totalLength: any; 
  companyName:any = 'xyz';
 
  constructor() { 

    
  }

  onBtnClick(){
    this.companyName = 'xyz';
  }


  
}
