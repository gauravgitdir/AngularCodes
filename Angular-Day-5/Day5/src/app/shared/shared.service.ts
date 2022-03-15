import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  students =[
    {
      name:"Sujal",
      goesTo:"College",
    },
    {
      name:"Ashish",
      goesTo:"College",
    },
    {
      name:"Abhay",
      goesTo:"School",
    },
    {
      name:"Lokesh",
      goesTo:"School",
    },
  ]
  updateGoesTo(id:number,newGoesTo:string){
    this.students[id].goesTo = newGoesTo;
  }
}

  

