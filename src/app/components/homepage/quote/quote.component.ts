import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../../shared/quote.interface';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}
