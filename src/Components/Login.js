import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";
import { useStateValue } from "../StateProvider"
import {actionTypes} from '../reducer';

function Login(){
  const [state, dispatch] = useStateValue();
  const signIn = () =>{
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch(error => {
        alert(error.message);
      });
  }
  return(
    <div className="login">
      <div className="login__container">
        <img src="https://media-public.canva.com/y541Q/MAEFszy541Q/1/s.svg" alt="g-mate" />
        <h1>Iniciar Sesión en G-mate</h1>
        <p>Por favor ingrese en Google para continuar</p>
        <Button onClick={signIn}>Iniciar sesión con Google</Button>
      </div>
    </div>
  )
};

export default Login;
