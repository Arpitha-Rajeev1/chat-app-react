import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {

    const signIn = () => {
        signInWithPopup(auth, provider).catch((error) => {
            alert(error.message)    
        });
    };

  return (
    <LoginContainer>
        <LoginInnerContainer>
        <img src='https://i.pinimg.com/originals/60/d4/d3/60d4d31e4f2b18abaee11da6281ff6ea.png' alt='logo' />
        <h1>Sign in to the Chat App</h1>
        <p>chat.app.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
        </LoginInnerContainer>
    </LoginContainer>

  )
}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 50px;
    padding-top: 0px;
    text-align: center;
    background-color: white;
    border-radius: 10px;

    > img {
        object-fit: contain;
        height: 200px;
    }

    > button {
        margin-top: 50px;
        background-color: green;
        padding: 10px;
        color: white;
        :hover {
            background-color: greenyellow;
            color: black;
        }
    }
`;