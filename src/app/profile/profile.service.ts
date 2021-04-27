import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getIpData() {
    return this.http.get("https://api.db-ip.com/v2/free/self");
  }

  postMetrics(data: any) {
    return this.http.post("URL", data);
  }
}
