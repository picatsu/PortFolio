import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private _service: ProfileService) {}

  ngOnInit() {}
}
