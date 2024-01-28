import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {Observable} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
readonly username='mustafaashfaq'
private apiUrl=`https://api.github.com/users/${this.username}`
  constructor(private http:HttpClient) { }
   public getData<T>(path?:string):Observable<T>{
    const dataUrl=path?`${this.apiUrl}/${path}`:this.apiUrl;
    return this.http.get<T>(dataUrl);
  }
  public getDataAsSignal<T>(injector:Injector,source:Observable<T>){
    return toSignal(source,{initialValue:null,injector});
  }

}
