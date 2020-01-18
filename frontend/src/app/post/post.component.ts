import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  list = [
    {
      name: '1',
      desc: 'hello world'
    },
    {
      name: '2'
    }
  ];

  inputValue = '';

  twoWayBindingValue = 'Initial';

  constructor() { }

  ngOnInit() {
  }

  onInput(event) {
    this.inputValue = event.target.value;
  }
}
