import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css'],
  providers:[SharedService]
})
export class CollegeComponent implements OnInit {
  @Input() student!: {name: string, goesTo: string};
  @Input() i!: number;
  @Output() changeGoesTo = new EventEmitter<{id: number, goesTo: string}>();

  constructor(){}

  ngOnInit(): void {
  }
  
  onClick(index: number, newGoesTo: string){
    this.changeGoesTo.emit({id: index, goesTo: newGoesTo})
  }
}