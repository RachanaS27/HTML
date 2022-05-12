import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdvtPostResponse } from './AdvtPostResponse';
//import { IPost} from './post';
import { ICategory } from './Category';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  //private url:string="https://jsonplaceholder.typicode.com/posts";
  private url1:string="http://localhost:9052/advertise/category";
  private url2:string="http://localhost:9052/advertise/addCategory";
  private url3:string="http://localhost:9052/advertise/getCategoryById/";
  private url4:string="http://localhost:9053/user/advertiseById/";
  private url5:string="http://localhost:9053/advertise/";

  constructor(private http:HttpClient) { }

 


  getDataFromService():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.url1);
  }

  addDataToServer(data:any):Observable<ICategory[]>{
    return this.http.post<ICategory[]>(this.url2,data)
  }

  getDataFromServerById(id:any):Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.url3+id);
  }

  getAdvertiseResponseById(id:any):Observable<IAdvtPostResponse[]>{
    return this.http.get<IAdvtPostResponse[]>(this.url4+id)
  }

  getAdvertiseResponseByName(name:any):Observable<IAdvtPostResponse[]>{
    return this.http.get<IAdvtPostResponse[]>(this.url5+name)
  }
}
