import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  post: any = null;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getPost(params.id);
    })
    
  }

  getPost(id) {
    this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe((response) => {
      this.post = response;
    }, (error) => {
      console.error(error)
    })
  }
}
