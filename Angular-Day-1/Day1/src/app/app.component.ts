import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-app';
  firstName:any = 'Yogita';
  lastName:any = 'Wasnik';
  productName:any='yogita';
  showProctName:any =false;
}
// onBtnClick(){
//   this.showProctName=true;
// }