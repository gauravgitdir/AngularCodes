import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SharedService]
})

export class AppComponent {
  title = 'AngularDay5';
  students:{name:string,goesTo:string}[] =[];
  schoolToCollege:number = 0;
  collegeToSchool:number=0;

  constructor(private sharedService:SharedService){}

  ngOnInit(){
    this.students = this.sharedService.students;
  }
  
  changeGoesTo(student:{id:number,goesTo:string}){
    if(student.goesTo === "School"){
      console.log("College To School "+(++this.collegeToSchool))
    }
    else if(student.goesTo === "College"){
      console.log("School To College "+(++this.schoolToCollege))
    }
    this.sharedService.updateGoesTo(student.id,student.goesTo);
  }
}