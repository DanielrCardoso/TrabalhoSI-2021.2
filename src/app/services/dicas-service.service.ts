import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DicasServiceService {

  private API_Cursos = 'http://localhost:9000'

  constructor(private http:HttpClient) { }

}
