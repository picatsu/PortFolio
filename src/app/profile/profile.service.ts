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
    return this.http.get(
      "https://api.bigdatacloud.net/data/ip-geolocation?key=d9e53816d07345139c58d0ea733e3870"
    );
  }

  postMetrics(data: any) {
    return this.http.post(
      "http://146.59.195.214:9090/metrics/api/v1/save",
      data
    );
  }
}
