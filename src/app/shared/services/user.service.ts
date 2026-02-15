import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{baseUrl } from '../../environment/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient) {}

  getAllUsers():Observable<any>{
    return this._HttpClient.get(`${baseUrl.baseUrl}/users`)
  }
  getUserById(uId:string | null):Observable<any>{
    return this._HttpClient.get(`${baseUrl.baseUrl}/users/${uId}`)
  }
  getUserPosts(uId:string | null):Observable<any>{
    return this._HttpClient.get(`${baseUrl.baseUrl}/posts?userId=${uId}`)
  }
  getPosts():Observable<any>{
    return this._HttpClient.get(`${baseUrl.baseUrl}/posts`)
  }
}
