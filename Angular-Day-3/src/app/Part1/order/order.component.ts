import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  

 display: boolean = true
  button: Array<number> = [];
  constructor() {}
  
  ngOnInit(): void {}

  onBtnClick() {
    this.display = !this.display;
    this.button.push(0)
  };
}
