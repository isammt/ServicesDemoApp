import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor() { }

  start(ns: number){
    if()
  }
  stop(){

  }

  getCount(){
    return this.counter;
  }
}