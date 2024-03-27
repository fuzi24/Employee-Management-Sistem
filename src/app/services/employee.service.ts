import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/employee', data)
  }
  putEmployee(id: any, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employee/${id}`, data)
  }
  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/employee')
  }
  getEmployeeById(id: any): Observable<any> {
    return this._http.get(`http://localhost:3000/employee/${id}`)
  }
  deleteEmployee(id: any){
    return this._http.delete(`http://localhost:3000/employee/${id}`)
  }

  getAll(){
    return this._http.get('http://localhost:3000/user')
  }
  getByCode(code:any){
    return this._http.get('http://localhost:3000/user' + '/' + code)
  }

  proRegis(inputData:any){
    return this._http.post('http://localhost:3000/user', inputData)
  }
  updetRegis(code: any, inputData:any){
    return this._http.put('http://localhost:3000/user' + '/' + code, inputData)
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
}
