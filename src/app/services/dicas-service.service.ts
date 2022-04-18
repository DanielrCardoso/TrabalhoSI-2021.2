import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dica } from '../models/Dica';

@Injectable({
  providedIn: 'root'
})
export class DicasServiceService {

  private API_Cursos = 'http://localhost:9000'

  constructor(private http:HttpClient) { }

  listarDicas():Observable<Dica[]>{
    return this.http.get<Dica[]>(this.API_Cursos + "/api/DICAS")
  }
}
