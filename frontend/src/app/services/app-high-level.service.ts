import { Injectable } from '@angular/core';
import { AppDataService } from './app-data.service';

@Injectable({
    providedIn: 'root'
})
export class AppHighLevelService {
    constructor(private appDataService: AppDataService) {
        
    }

    date: Date = new Date();
    

    inc() {
        this.appDataService.inc()
    }

    get count() {
        return this.appDataService.counter;
    }
}