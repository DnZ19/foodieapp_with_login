import React from 'react';
import styled from "styled-components";
import '../App.css';
import {useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase-config";


function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleSubmit=()=> {
        if (loginEmail && loginPassword){
            localStorage.setItem("emailData", loginEmail);
            localStorage.setItem("passwordData", loginPassword);
        }
    }

    const Login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );

            handleSubmit()
            console.log(user);

        } catch (e) {
            console.error(e);
        }
    };

    // const Logout = async () => {
    //     await signOut(auth);
    // };


    return (


        <LoginForm>
            <h2>Login page</h2>

            <FormContainer>
                <input
                    type="text"
                    placeholder="User name"
                    onChange={(e) => {
                        setLoginEmail(e.target.value)
                    }}

                />
                <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => {
                        setLoginPassword(e.target.value)
                    }}
                />
                <button onClick={Login}>Login</button>

            </FormContainer>

            <p>Don't have an account yet? Please first register <a href="/register">here</a></p>

        </LoginForm>


    );
}

export default Login;

const LoginForm = styled.div`

  margin-top: 100px;
  height: 620px;
  width: 100%;

`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

`;