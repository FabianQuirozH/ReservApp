import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  //podemos crear variables
  //NOMBRE: TIPO = VALOR
  //NOMBRE= CLASE(VALOR);
  persona = new FormGroup({
    rut:new FormControl('',[Validators.minLength(9),Validators.maxLength(10),Validators.required, Validators.pattern("[0-9]{7,8}-[0-9kK]{1}")]), 
    nombre:new FormControl('',[Validators.required,Validators.pattern("[a-z-A-Z]{3,5}")]), 
    fecha_nacimiento:new FormControl('',[Validators.required,]), 
    genero:new FormControl('',[Validators.required]) //el required es para que sea obligatorio el dato 
    //validar la fecha de nacimiento creando un metodo,
  });

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

    //variables arriba del constructor
  constructor(private router: Router) {}

  ngOnInit() {
  }

    //podemos crear metodos:
    public registrar():void{
      //validaciones? llamar un DAO? conversion?}
      console.log(this.persona.value);
      alert("registrado!");
      this.router.navigate(['/login']);

    }

    setResult(ev:any) {
      console.log(`Dismissed with role: ${ev.detail.role}`);
    }

    /* metodo para validar boton
    public habilitar_boton():boolean{
      if(this.persona.valid){
        return false;
      }
      return true;
    }*/
   

}
