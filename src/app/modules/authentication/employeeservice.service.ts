import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmplyeeserviceService {
url='https://localhost:44343/'

  constructor(private http:HttpClient) { }

  createemployee(employee:Employee):Observable<Employee>{
debugger;
    return this.http.post<Employee>(this.url+'api/employees',employee)

  }
}