import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay} from 'rxjs/operators'
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {selectPostsList} from "../../store/selectors/user.selectors";
import {GetPosts} from "../../store/actions/post.actions";
import {IPost} from "../../models/post";

@Component({
  selector: 'app-work-api',
  templateUrl: './work-api.component.html',
  styleUrls: ['./work-api.component.scss']
})
export class WorkApiComponent implements OnInit {
  posts$ = [];

  constructor(private http: HttpClient, private store: Store<IAppState>) {
    this.store.pipe(select(selectPostsList)).subscribe((posts: IPost[]) => {
      this.posts$ = posts;
    });
  }

  isLoading: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.addPosts();
    }, 1000);
  }

  addPosts() {
    this.isLoading = true;
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts?_limit=2').pipe(delay(200)).subscribe((response) => {
      this.store.dispatch(new GetPosts(response));
      this.isLoading = false;
    }, (error) => {
      console.error(error)
    })
  }
}
