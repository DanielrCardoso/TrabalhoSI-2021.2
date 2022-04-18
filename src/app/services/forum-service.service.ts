import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Duvida } from '../models/Duvida';
import { Resposta } from '../models/Resposta';

@Injectable({
  providedIn: 'root'
})
export class ForumServiceService {

  private API_Cursos = 'http://localhost:9000'

  constructor(private http:HttpClient) { }
  listarDuvidas():Observable<Duvida[]>{
    return this.http.get<Duvida[]>(this.API_Cursos + "/api/DUVIDAS")
  }

  listarRespostas():Observable<Resposta[]>{
    return this.http.get<Resposta[]>(this.API_Cursos + "/api/RESPOSTAS")
  }

  salvarDuvida(duvida:Duvida){
    this.http.post(this.API_Cursos + '/api/DUVIDAS' , duvida).subscribe(
      ()=>alert("Sua duvida foi registrada")
    )
  }
}
