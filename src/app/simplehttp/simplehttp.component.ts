import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-simplehttp',
  templateUrl: './simplehttp.component.html',
  styleUrls: ['./simplehttp.component.css']
})
export class SimplehttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) {

  }

  ngOnInit() {
  }

  makeHttpRequest(): void {
    this.loading = true;
    this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe((data: Response) => {
      this.data = data.json();
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
    });
  }

  makePostRequest(): void {
    const body = {
      body: 'testing',
      title: 'testing post',
      userId: 1
    };

    this.loading = true;
    this.http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify(body)).subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
  }

  makeDeleteRequest(): void {
    this.loading = true;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1').subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
  }
}
