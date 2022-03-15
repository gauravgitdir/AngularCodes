import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css']
})
export class TimerControlComponent implements OnInit {
  @Output() oddNumberEvent = new EventEmitter<{num:number}>();
  @Output() evenNumberEvent = new EventEmitter<{num: number}>();
  n: number = 0;
  timer: any;
  point:any;

  constructor() { }


  ngOnInit() {
  }

  start(){
    this.timer = setInterval( () => {
      this.n += 1;
      if(this.n%2 === 0){
        this.evenNumberEvent.emit({
          num: this.n
        })
      }
      else {
        this.oddNumberEvent.emit({
          num: this.n
        })
      }

    },
      1000);
  }

  stop(){
    console.log('stop');
    clearInterval(this.timer);
  }

  onOddNumber(oddNumber: number) {
    console.log("on odd number " + oddNumber);
  }
}