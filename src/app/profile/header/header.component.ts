import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private _service: ProfileService) {}

  ngOnInit() {
    this._service.getALLKeys().subscribe((res) => {
      console.log("reponse : ", res);
    });
  }
}
