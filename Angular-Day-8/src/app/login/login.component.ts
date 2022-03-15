import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from "../user.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f', { static: false }) loginForm: any;

  constructor(private authService: UserService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    await this.authService
      .signIn(form.value.email, form.value.password)
      .then((_res: any) => this.router.navigate(['dashboard']))
      .catch((error: { message: any; }) => {
        alert(error.message)
      });
  }
}
