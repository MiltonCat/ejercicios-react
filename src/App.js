import React, { Component } from 'react';
import firebase from 'firebase';

import  File from './file';
import './App.css';

class App extends Component {
 constructor () {
   super();
   this.state = {
     user: null
   };

   this.handleAuth = this.handleAuth.bind(this);
   this.handleLogout = this.handleLogout.bind(this);
 }

 componentWillMount (){
   firebase.auth().onAuthStateChanged(user => {
     this.setState({
       user
     });
   })
 }


handleAuth (){
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(result => console.log(`${result.user.email} Ha iniciado sesion`))
  .catch(error => console.log(`Error ${error.code}: ${error.mensaje}`));
}

handleLogout (){
   firebase.auth().signOut()
  .then(result => console.log(`${result.user.email}Ha Salido`))
  .catch(error => console.log(`Error ${error.code}: ${error.mensaje}`));
}

renderLoginButton (){
  // Si el usuario esta logueado
  if(this.state.user){
    return(
      <div>
        <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
        <p>Hola {this.state.user.displayName}!</p>
        <button onClick={this.handleLogout}>Salir</button>
        <File/>
      </div>

    );
     // Si no lo estas
  }else {
  return(
  <button onClick={this.handleAuth}>Login con Google</button>
   )}

}

  render() {
    return (
      <div className="App">
       { this.renderLoginButton() }
      </div>
    );
  }
}

export default App;
