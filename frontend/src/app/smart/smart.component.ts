import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { AppHighLevelService } from '../services/app-high-level.service';
import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss'],
  providers: [LocalDataService]
})
export class SmartComponent implements OnInit {

  constructor(private appDataService: AppDataService, private appHighLevelService: AppHighLevelService, private localDataService: LocalDataService) { }

  ngOnInit() {
  }

}
