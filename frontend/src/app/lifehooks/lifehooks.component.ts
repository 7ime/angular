import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { componentSelectorHelper } from 'src/helpers/component-selector-helper';

@Component({
  selector: "app-lifehooks",
  templateUrl: "./lifehooks.component.html",
  styleUrls: ["./lifehooks.component.scss"]
})
export class LifehooksComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() prop: string;

  constructor() { 
    //console.log('hook - constructor')
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log('hook - ngOnChanges')
    //console.log(changes)
  }

  ngOnInit() {
    //console.log('hook - ngOnInit: after creating the component')
  }

  ngDoCheck() {
    //console.log('hook - ngDoCheck: call after any changes in angular app')
  }

  ngAfterContentInit() {
    //console.log('hook - ngAfterContentInit')
  }

  ngAfterContentChecked() {
    //console.log('hook - ngAfterContentChecked')
  }

  ngAfterViewInit() {
    //console.log('hook - ngAfterViewInit')
  }

  ngAfterViewChecked() {
    //console.log('hook - ngAfterViewChecked')
  }

  ngOnDestroy() {
    //console.log('hook - ngOnDestroy')
  }
}
