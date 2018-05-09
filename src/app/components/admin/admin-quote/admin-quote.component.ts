import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import { Quote } from '../../../shared/quote.interface';
import { QuoteService } from '../../../shared/quote.service';


@Component({
  selector: 'app-admin-quote',
  templateUrl: './admin-quote.component.html',
  styleUrls: ['./admin-quote.component.scss']
})
export class AdminQuoteComponent implements OnInit {

  @Input() quote: Quote;
  @Output() quoteDeleted = new EventEmitter<Quote>();

  editing = false;
  editValueTitle = '';
  editValueContent = '';
  editValueSeverity = '';

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  onEdit(){
    this.editing = true;
    this.editValueTitle = this.quote.title;
    this.editValueContent = this.quote.content;
    this.editValueSeverity = this.quote.severity;
  }

  onUpdate(){
    this.quoteService.updateQuote(this.quote.id, this.editValueTitle, this.editValueContent, this.editValueSeverity)
    .subscribe(
      (quote: Quote) => {
        this.quote.title = this.editValueTitle;
        this.quote.content = this.editValueContent;
        this.quote.severity = this.editValueSeverity;
        this.editValueTitle = '';
        this.editValueContent = '';
        this.editValueSeverity = '';
      }
    );
    this.editing = false;
  }

  onDelete() {
    this.quoteService.deleteQuote(this.quote.id)
      .subscribe(
        () => {
          this.quoteDeleted.emit(this.quote);
          console.log('Quote deleted');
        }
      );
    }

  onCancel() {
    this.editValueTitle = '';
    this.editValueContent = '';
    this.editValueSeverity = '';
    this.editing = false;
  }


}
