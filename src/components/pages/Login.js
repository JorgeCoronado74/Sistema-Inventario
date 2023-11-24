import React from 'react';
import './styles/Login.css';
import Registro from '../Registro';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      usuario:'',
      password:'',
      mensaje:'',
    }
    this.handlerUsuario=this.handlerUsuario.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.validarUsuario=this.validarUsuario.bind(this);
  }
  handlerUsuario(event){
    this.setState({usuario:event.target.value});
  }
  handlePassword(event){
    this.setState({password:event.target.value});
  }
  validarUsuario(){
    var usu=this.state.usuario;
    var pas=this.state.password;
    if(usu=='hola')
    {
      if(pas=='1234')
      {
        this.setState({mensaje:''});
        localStorage.setItem('user',usu);
        localStorage.setItem('pass',pas);
        window.location.reload();
      }
      else
      this.setState({mensaje:'Password incorrecto'});
    }
      this.setState({mensaje:'Usuario incorrecto'});
  }

  render(){

    return(
        <form className='Boostrap'>
            <body >
        <tr>
          <td colSpan='2'>INICIO DE SESION</td>
        </tr>
        <tr>
          <label for="exampleInputEmail1" class="form-label">Usuario</label>
          <td><input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.usuario} onChange={this.handlerUsuario}></input></td>
        </tr>
        <tr>
        <label for="exampleInputPassword1" class="form-label">Password</label>
          <td><input class="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.handlePassword} type='password'></input></td>
        </tr>
        <tr>
          <td colSpan='2'><button type="submit" class="btn btn-primary" style={{width:'100%'}} onClick={this.validarUsuario}>INICIAR SESION</button></td>
        </tr>
        <br></br>
        <tr>
          <td colSpan='2'><button type="submit" class="btn btn-primary" style={{width:'182%'}} onClick={Registro}>REGISTRARME</button></td>
        </tr>
        
       

        <div style={{color:'Red'}}>{this.state.mensaje}</div>
        </body>
        </form>
    );
  }
}

export default Login;