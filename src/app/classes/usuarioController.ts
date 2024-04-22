import { Usuario } from "./usuario";

export class UsuarioController
{
  public crear(pEmail:string, pClave:string) : Usuario
  {
    let ret = new Usuario();
    try
    {
      ret.setEmail(pEmail);
      ret.setClave(pClave);
      return ret;
    }
    catch(error)
    {
      throw error;
    }
  }
  public insertar(pUsuario:Usuario) : boolean
  {
    return Usuario.insertar(pUsuario);
  }
  public existe(pUsuario:Usuario) : boolean
  {
    return Usuario.existe(pUsuario);
  }
}