import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dica } from '../models/Dica';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class CurtirdicaServiceService {

  private API_Cursos = 'http://localhost:9000'

  constructor(private http:HttpClient) { }

  curtir(curtido:any){
    console.log(curtido)
    this.http.post(this.API_Cursos + '/api/CURTIR' , curtido).subscribe()
  }
}
