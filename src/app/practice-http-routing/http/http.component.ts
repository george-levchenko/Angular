import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpComponent {

  config: Config;
  configArray: any[];
  jsonData: string;
  contents: string;
  configUrl = 'assets/config.json';

  newconfig: Config = {
    heroesUrl: '#1',
    textfile: 'someVata'
  };
  newconfigTemplate = JSON.stringify(this.newconfig);

  constructor(private http: HttpClient) { }

  // getConfig() {  // Getter JSON variant #1
  //   return this.http.get(this.configUrl);
  // }
  //
  // showConfig() {
  //   this.getConfig() .subscribe(
  //     (data: Config) => this.config = {
  //       heroesUrl: data['heroesUrl'],
  //       textfile: data['textfile']
  //     }); }

  // getConfigResponse(): Observable<HttpResponse<Config>> {  // Getter with headers
  //   return this.http.get<Config>(
  //     this.configUrl, { observe: 'response' });
  // }
  // showConfigResponse() {
  //   this.configService.getConfigResponse()
  //   // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  //
  //       // access the body directly, which is typed as `Config`.
  //       this.config = { ... resp.body };
  //     });
  // }

  private handleError(error?: HttpErrorResponse) {  // Errors Handler
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message); // A client-side or network error occurred. Handle it accordingly.
    } else {
      console.error( // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');     // return an observable with a user-facing error message
  }


  getConfig() {   // Getter JSON variant #2
    return this.http.get<Config>(this.configUrl).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  showConfig() {
    this.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data } // clone the data object, using its known Config shape
      );
    this.jsonData = JSON.stringify(this.config);
  }

  getTextFile(filename: string) {    // Getter not JSON
    return this.http.get(filename, {responseType: 'text'}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  showTextFile() {
    this.getTextFile('assets/textfile.txt')
      .subscribe(results => this.contents = results);
  }

  addObject (config: Config): Observable<Config> {
    return this.http.post<Config>(this.configUrl, config)
      .pipe(
        tap(val => console.log(val)),
        catchError(this.handleError)
      );
  }

  pushObject() {
    this.addObject(this.newconfig)
      .subscribe();
    // newconfig => this.configArray.push(newconfig)
  }

   deleteObject(): Observable<{}> {

     // const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42

     return this.http.delete(this.configUrl)
       .pipe( catchError(this.handleError) );
   }
   deleteObjectButton() {
     // this.deleteObject.subscribe();
   }

  updateObject (newconfig: Config): Observable<Config> {
    return this.http.put<Config>(this.configUrl, newconfig)
      .pipe(
        catchError(this.handleError)
      );
  }
    updateObjectButton() {
      // this.updateObject.subscribe();
    }

}
