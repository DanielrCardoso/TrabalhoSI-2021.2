import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private API_Cursos = 'http://localhost:9000'

  constructor(private http:HttpClient) { }

  cadastrarUsuario(usuario:Usuario){
    this.http.post(this.API_Cursos+'/api/USUARIOS',usuario).subscribe(
      ()=>alert("Ola " + usuario.nome),
      (err)=>alert("Erro ao cadastrar usuario")
    )
  }

  getUser(user:any){
    return this.http.get<Usuario>(this.API_Cursos + "/api/USUARIOS/"+user)
  }
}
