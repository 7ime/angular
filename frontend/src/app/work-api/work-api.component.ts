import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay} from 'rxjs/operators'

@Component({
  selector: 'app-work-api',
  templateUrl: './work-api.component.html',
  styleUrls: ['./work-api.component.scss']
})
export class WorkApiComponent implements OnInit {

  constructor(private http: HttpClient) { }

  posts: any = [];
  isLoading: boolean = false;

  ngOnInit() {
    this.addPosts();
  }

  addPosts() {
    this.isLoading = true;
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts?_limit=2').pipe(delay(200)).subscribe((response) => {
      this.posts = response;
      this.isLoading = false;
    }, (error) => {
      console.error(error)
    })
  }
}
