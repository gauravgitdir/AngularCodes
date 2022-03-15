import { GuardGuard } from './guard.guard';
import { Customer3Component } from './customer3/customer3.component';
import { Customer2Component } from './customer2/customer2.component';
import { Customer1Component } from './customer1/customer1.component';
import { User3Component } from './user3/user3.component';
import { User2Component } from './user2/user2.component';
import { User1Component } from './user1/user1.component';
import { AuthServiceService } from './auth-service.service';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { Step2Component } from './step2/step2.component';
import { BrowserModule } from '@angular/platform-browser';
import { Step1Component } from './step1/step1.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Step3Component } from './step3/step3.component';

const routes: Routes = [
  { path: '', component: Step1Component },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },

  {
    path: 'users',
    component: UsersComponent,
    canActivateChild: [GuardGuard],
    children: [
      { path: 'user1', component: User1Component },
      { path: 'user2', component: User2Component },
      { path: 'user3', component: User3Component },
    ],
  },
  {
    path: 'step3',
    component: Step3Component,

    children: [
      { path: 'customer1', component: Customer1Component },
      { path: 'customer2', component: Customer2Component },
      { path: 'customer3', component: Customer3Component },
    ],
  },

  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
