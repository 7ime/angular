import { Injectable } from '@angular/core';

@Injectable()
export class AppDataService {
    counter: number = 0;

    inc() {
        this.counter++;
    }

    dec() {
        this.counter--;
    }
}