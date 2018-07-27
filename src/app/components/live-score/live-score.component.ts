import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.scss']
})
export class LiveScoreComponent implements OnInit {

  public todoText: string;


  constructor() {
    this.todoText = '';
   }


  ngOnInit() {

  }
}

