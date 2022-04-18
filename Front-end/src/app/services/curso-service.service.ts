import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Curso } from '../models/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  private API_Cursos = 'http://localhost:9000'

  constructor(private http:HttpClient) { }

  listarCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.API_Cursos + "/api/cursos")
  }
}
