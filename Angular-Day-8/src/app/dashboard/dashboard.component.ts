import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: UserService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.authService.getData().subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        alert(error);
      }
    );
  }
}
