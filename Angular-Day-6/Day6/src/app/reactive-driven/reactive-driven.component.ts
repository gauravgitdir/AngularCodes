import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.css'],
})

export class ReactiveDrivenComponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),]),
      password: new FormControl('', [Validators.required]),
    });
  }
  defaultStatus: any = 'active';
  AddDepartment() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('departments')).push(control);
  }
  
  submitForm() {
    console.table(this.form.value);
  }
}
