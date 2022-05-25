import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) 
  
{

 }
 login(username :string, password:string) {
  return this.http.post<any>(`${environment.baseApiUrl}/login`, { username, password })
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
           return user;
       }));
 }

}
 

