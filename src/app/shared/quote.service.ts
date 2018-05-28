import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class QuoteService {
  constructor(private http: Http) {

  }

  addQuote(title: string, content: string, severity: string ) {
    const body = JSON.stringify({content: content, title: title, severity: severity });
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8000/api/quote/', body, {headers: headers});
  }

  getQuotes(): Observable<any> {
    return this.http.get('http://localhost:8000/api/quotes')
    .pipe(map(
        (response: Response) => {
          return response.json().quotes;
        }
      ));
    }


  updateQuote(id: number, newTitle: string, newContent: string, newSeverity: string) {
    const body = JSON.stringify({title: newTitle, content: newContent, severity: newSeverity});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('http://localhost:8000/api/quote/' + id, body, {headers: headers})
    .pipe(map(
        (response: Response) => response.json()
    ));
  }

  deleteQuote(id: number) {
    return this.http.delete('http://localhost:8000/api/quote/' + id);
  }
}
