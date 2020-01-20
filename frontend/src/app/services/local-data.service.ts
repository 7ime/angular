import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";

@Injectable()
export class LocalDataService {

  constructor(private http: HttpClient, private store: Store<IAppState>) {
  }

  counter: number = 0;

  inc() {
      this.counter++;
  }

  dec() {
      this.counter--;
  }
}
