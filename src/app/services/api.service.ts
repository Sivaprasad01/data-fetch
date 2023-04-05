import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyData } from 'src/model/myData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  baseUrl:string='https://jsonplaceholder.typicode.com/posts'
  getAllDatas():Observable<MyData>{

 return this.http.get(this.baseUrl);
 
  }
}
