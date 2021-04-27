import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "../../../node_modules/ngx-spinner";
import { ProfileService } from "./profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _service: ProfileService
  ) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.postMetrics();
  }

  postMetrics() {
    this._service.getIpData().subscribe((item) => {
      item = { ...item, ...{ date: new Date() } };
      console.log(item);
      this._service.postMetrics(item).subscribe((response) => {});
    });
  }
}
