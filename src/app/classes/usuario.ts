export class Usuario
{
  public email:string;
  public clave:string;
  
  constructor(pEmail?: string, pClave?: string)
  {
      this.email = pEmail || "";
      this.clave = pClave || "";
  }

  public setEmail(pEmail: string) : void
  {
    pEmail = pEmail.toLowerCase();

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(pEmail)) {
      throw "Email no válido";
    }

    this.email = pEmail;
  }
  public setClave(pClave: string) : void
  {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/.test(pClave)) {
      throw "La contraseña debe tener al menos 3 caracteres, incluyendo al menos una letra y un numero";
    }

    this.clave = pClave;
  }
  public getEmail() : string
  {
    return this.email;
  }
  public getClave() : string
  {
    return this.clave;
  }

  public equals(pUsuario:Usuario) : boolean
  {
    return ((this.email === pUsuario.email && this.clave === pUsuario.clave));
  }

  public static jsonToLista(pJsonLista:string) : Usuario[]
  {
      let lista = JSON.parse(pJsonLista);
      let ret: Usuario[] = [];

      for (let i = 0; i < lista.length; i++)
      {
        if (lista[i].email && lista[i].clave)
        {
          ret.push(new Usuario(lista[i].email, lista[i].clave));
        }
      }

      return ret;
  }
  public static jsonToInstancia(pJsonInstancia:string) : Usuario
  {
    let usuario = JSON.parse(pJsonInstancia);

    if(usuario.email && usuario.clave)
    {
      return new Usuario(usuario.email, usuario.clave);
    }

    return new Usuario();
  }

  public static traerTodos() : Usuario[]
  {
    let jsonTexto = localStorage.getItem("usuarios");
    let listaUsuarios:Usuario[] = [];

    if(jsonTexto === null)
    {
      return listaUsuarios;
    }

    return Usuario.jsonToLista(jsonTexto);
  }
  public static existe(pUsuario:Usuario) : boolean
  {
    let listaUsuarios = Usuario.traerTodos();

    for (let i = 0; i < listaUsuarios.length; i++)
    {
      if (listaUsuarios[i].equals(pUsuario))
      {
        return true;
      }
    }

    return false;
  }
  public static insertar(pUsuario:Usuario) : boolean
  {
    let listaUsuarios = Usuario.traerTodos();

    if(pUsuario)
    {
      listaUsuarios.push(pUsuario);
      localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    }

    return Usuario.existe(pUsuario);
  }
  public static modificar(pUsuario:Usuario) : boolean
  {
    return false;
  }
  public static eliminar(pUsuario:Usuario) : boolean
  {
    return false;
  }
}