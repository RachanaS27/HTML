import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost} from './post';
import { ICategory } from './Category';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  //private url:string="https://jsonplaceholder.typicode.com/posts";
  private url:string="http://localhost:9052/advertise/category";
  constructor(private http:HttpClient) { }

  getDataFromService():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.url);
  }


}
