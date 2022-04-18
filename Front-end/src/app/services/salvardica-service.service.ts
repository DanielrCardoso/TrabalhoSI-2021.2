import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalvardicaServiceService {

  private API_Cursos = 'http://localhost:9000'

  constructor(private http:HttpClient) { }

  salvar(salvo:any){
    console.log(salvo)
    this.http.post(this.API_Cursos + '/api/SALVAR' , salvo).subscribe()
  }

  listarDicasSalvas():Observable<[]>{
    return this.http.get<[]>(this.API_Cursos + "/api/SALVAR")
  }
}
