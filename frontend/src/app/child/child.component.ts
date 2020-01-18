import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  _title: string;
  
  @Input()
  set title(title: string) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  constructor() { }

  ngOnInit() {
  }

}
