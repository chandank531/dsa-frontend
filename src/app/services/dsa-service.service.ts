import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError, of, tap, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DsaServiceService {

  constructor(private http: HttpClient) {}

  getAllTopics(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/topic/get-all-topics').pipe(
      map(response => {
        console.log('Raw response:', response); 
        return response.data;
      }),
      catchError(error => {
        console.error('Error fetching topics:', error);
        return of([]);
      })
    );
  }

  markProblemAsSolved(problemId: string,isCompleted: boolean): Observable<any> {
    console.log('Problem ID:', problemId);
    return this.http.patch<any>(`http://localhost:3000/api/topic/problem/${problemId}`, {isCompleted}).pipe(
      map(response => {
        console.log('Raw response:', response); 
        return response.data;
      }),
      catchError(error => {
        console.error('Error fetching topics:', error);
        return of([]);
      })
    );
  }

  
}
