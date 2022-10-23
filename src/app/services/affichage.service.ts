import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Mesure , Module } from '../mesure';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AffichageService {

  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getMesure(): Observable<Mesure[]> {
    return this.http.get<Mesure[]>(`${apiUrl}`)
      .pipe(
        tap(sales => console.log('fetched sales')),
        catchError(this.handleError('getSales', []))
      );
  }
  FindModel():Observable<Module[]> {
    return this.http.get<Module[]>((`${apiUrl}/datamodel`))
    .pipe(
      tap(sales => console.log('fetched modules')),
      catchError(this.handleError('getSales', []))
    );
  
    }
    
  deleteModel(id: string): Observable<any> {
    return this.http.delete((`${apiUrl}/deletemodel`));
  }

  }

