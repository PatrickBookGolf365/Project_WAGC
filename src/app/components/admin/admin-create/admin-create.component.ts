import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuoteService } from '../../../shared/quote.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})
export class AdminCreateComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.quoteService.addQuote(form.value.title, form.value.content, form.value.severity)
      .subscribe(
        () => alert('Quote created!')
      );
    form.reset();
  }

}
