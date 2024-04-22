import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Usuario } from '../../classes/usuario';
import { UsuarioController } from '../../classes/usuarioController';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public formUsuario:Usuario;
  private usuarioController:UsuarioController;

  constructor(private router: Router)
  {
    this.formUsuario = new Usuario();
    this.usuarioController = new UsuarioController();
  }

  public Logear()
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

    if(this.usuarioController.existe(usuario) === false)
    {
      alert("No existe el usuario " + usuario.email);
      return;
    }
    
    alert("Bienvenido " + usuario.email);
    return;
  }
}
