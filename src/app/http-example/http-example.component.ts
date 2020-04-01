import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {
  apiRoot: string = "https://httpbin.org";

  constructor(private http: HttpClient) { }

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http.get(url, httpOptions).subscribe(res => console.log(res));
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http.post(url, { moo: "foo", goo: "loo" }, httpOptions)
             .subscribe(res => console.log(res));
  }

  doDELETE() {
    console.log("DELETE");
    
  }

  ngOnInit() {
  }

}