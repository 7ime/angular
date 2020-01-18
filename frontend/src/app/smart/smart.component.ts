import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { AppHighLevelService } from '../services/app-high-level.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {

  constructor(private appDataService: AppDataService, private appHighLevelService: AppHighLevelService) { }

  ngOnInit() {
  }

}
