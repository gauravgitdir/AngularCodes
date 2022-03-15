import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  @Input() student!: {name: string, goesTo: string};
  @Input() i!: number;
  @Output() changeGoesTo = new EventEmitter<{id: number, goesTo:string}>(); 

  constructor(){}

  ngOnInit(): void {
  }
  
  onClick(index: number, newGoesTo: string){
    this.changeGoesTo.emit({id: index, goesTo: newGoesTo})
  }
}