import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, retry, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

export interface Worker {
  id: number;
  name: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpComponent {

  config: Config;
  jsonData: string;
  contents: string;
  configUrl = 'assets/config.json';
  private workersUrl = 'api/workers';  // URL to web api
  workers: string;
  worker: string;
  newWorker = {id: 11, name: 'Vata'};
  updatedWorker = {id: 7, name: 'Boss'};
  deletedWorker = {id: 3, name: 'Alex'};


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

  // --------------------------------------------------------------

  getConfig() {   // Getter JSON variant #2
    return this.http.get<Config>(this.configUrl).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  showConfig() {
    this.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data } ); // clone the data object, using its known Config shape

    this.jsonData = JSON.stringify(this.config);
  }

  // --------------------------------------------------------------

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

  // --------------------------------------------------------------

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.workersUrl);
  }

  showWorkers() {
    this.getWorkers().subscribe(
      val => this.workers = JSON.stringify(val)
    );
  }

  // --------------------------------------------------------------

  getWorker(id: number): Observable<Worker> {
    const url = `${this.workersUrl}/${id}`;
    return this.http.get<Worker>(url);
  }

  showWorker() {
    this.getWorker(5).subscribe(
      obj => this.worker = obj.name);
  }

  // --------------------------------------------------------------

  addWorker (worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.workersUrl, worker, httpOptions)
      .pipe(
        tap(val => console.log(val)),
        catchError(this.handleError)
      );
  }

  pushWorker() {
    this.addWorker(this.newWorker)
      .subscribe();
  }

  // --------------------------------------------------------------

  updateWorker (worker: Worker): Observable<Worker> {
    const url = `${this.workersUrl}/${worker.id}`;
    return this.http.put<Worker>(url, worker)
      .pipe(
        catchError(this.handleError)
      );
  }
    updateWorkerButton() {
      this.updateWorker(this.updatedWorker).subscribe();
    }

   deleteObject(worker: Worker): Observable<{}> {

     const url = `${this.workersUrl}/${worker.id}`;

     return this.http.delete(url).pipe(
       catchError(this.handleError) );
   }
   deleteObjectButton() {
     this.deleteObject(this.deletedWorker).subscribe();
   }

}
