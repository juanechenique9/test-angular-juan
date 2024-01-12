import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockAuthUrl = 'https://run.mocky.io/v3/21a2141a-49a7-478c-8628-659ae9380078';

  constructor(private http: HttpClient) { }

  authUser(username: string, password: string): Observable<boolean> {
    return this.http.get<any>(this.mockAuthUrl).pipe(
      map(dataUser => {
        if (dataUser && dataUser.userName === username && dataUser.password === password) {
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Error al obtener datos del mock', error);
        return of(false);
      })
    );
  }
}
