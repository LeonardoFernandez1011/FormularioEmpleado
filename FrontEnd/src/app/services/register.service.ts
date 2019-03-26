import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  selectAllRegister: Register;
  registers: Register[];
  UrlApi = 'http://localhost:3000/api/register/'
  constructor(private http: HttpClient) {
    this.selectAllRegister = new Register()
   }

   // Muestra todos los usuarios registrados
   getAllRegister(){
     return this.http.get(this.UrlApi)
   }

   // Permite agrega usuarios nuevos
   postRegister(register: Register){
     return this.http.post(this.UrlApi, register);
   }

   // Permite editar usuarios
   putRegister(register: Register) {
     return this.http.put(this.UrlApi + `${register._id}`, register)
   }

   // Permite borrar usuarios
   deleteRegister(_id: string){
     return this.http.delete(this.UrlApi + `/${_id}`)
   }
}
