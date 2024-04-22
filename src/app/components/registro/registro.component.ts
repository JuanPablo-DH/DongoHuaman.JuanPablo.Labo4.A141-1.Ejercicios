import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario';
import { Router } from '@angular/router';
import { UsuarioController } from '../../classes/usuarioController';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  public formUsuario:Usuario;
  private usuarioController:UsuarioController;

  constructor(private router: Router)
  {
    this.formUsuario = new Usuario();
    this.usuarioController = new UsuarioController();
  }

  public Registrar()
  {
    let usuario:Usuario;

    try
    {
      usuario = this.usuarioController.crear(this.formUsuario.getEmail(), this.formUsuario.getClave());
    }
    catch(error)
    {
      alert(error);
      return;
    }

    if(Usuario.insertar(usuario))
    {
      alert("INSERCION EXITOSA");
    }
    else
    {
      alert("INSERCION FALLADA")
    }
  }
}
