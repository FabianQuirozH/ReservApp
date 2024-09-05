import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //aca podemos crear variables

  usuarios: any[]= []   //NOMBRELISTA: que tendra(any es cualquiercosa)[](ya que es una lista)=[](diciendo que es vacia)

  constructor() { }

  //aqui vamos a crear toda nuestra logica de programación
  //DAO:
  
  public createUsuario(usuario:any){}

  public getUsuario(rut:string){}

  public getUsuarios(){}

  public updateUsuario(rut:string, nuevoUsuario:any){}

  public deleteUsuario(rut:string){}

}
