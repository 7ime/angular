import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifehooks-parent',
  templateUrl: './lifehooks-parent.component.html',
  styleUrls: ['./lifehooks-parent.component.scss']
})
export class LifehooksParentComponent implements OnInit {

  props: string = 'get props';

  isShowLifeHooksComponent = true;

  constructor() { }

  ngOnInit() {
    
  }

  onInput(event) {
    this.props = event.target.value
  }

  onToggleLifeHooksComponent() {
    this.isShowLifeHooksComponent = !this.isShowLifeHooksComponent;
  }

}
