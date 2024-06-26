import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Registro } from '../interfaces/PListado.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  private URL: String = 'http://localhost:3001/registro'
  constructor(private Http: HttpClient) {}


  getAll():Observable<Registro[]>{
    return this.Http.get<Registro[]>(this.URL);
  }

  delete(id:number):Observable<Registro>{
    return this.Http.delete<Registro>(this.URL+'/'+id)
  }

  create(agreg:Registro):Observable<Registro>{
    return  this.Http.post<Registro>(this.URL, agreg)
  }

  get(id:number):Observable<Registro>{
    return this.Http.get<Registro>(this.URL+'/'+id)
  }

  update(actualiz:Registro):Observable<Registro>{
    return this.Http.put<Registro>(this.URL, actualiz)
  }



}
