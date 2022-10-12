import React from 'react';
import styled from "styled-components";
import '../App.css';
import {useState} from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase-config";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if(user) {
            const uid = user.uid;
            localStorage.setItem("user", uid);
            console.log(uid);
        }

    });


    const handleSubmit=()=> {

        if (loginEmail && loginPassword){
            localStorage.setItem("emailData", loginEmail);
            localStorage.setItem("passwordData", loginPassword);

            navigate("/home");
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

        } catch (error) {
            console.error(error);
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorCode && errorMessage);
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
                    placeholder="User Email"
                    onChange={(e) => {
                        setLoginEmail(e.target.value)
                    }}
                    required

                />
                <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => {
                        setLoginPassword(e.target.value)
                    }}
                    required
                />
                <button
                    onClick={Login}
                    disabled={!loginEmail || !loginPassword}

                >Login</button>

            </FormContainer>

            <p>Don't have an account yet? Register
                <Link
                to="/register"
                style={{
                    textDecoration: "none",
                    color: "var(--main-style-element-color)",
                    fontSize: 20

                }}

                > here!
                </Link>
            </p>

        </LoginForm>


    );
}

export default Login;

const LoginForm = styled.div`

  margin-top: 100px;
  height: 620px;
  width: 100%;
  
  h2 {
    color: white;
    margin-bottom: 25px;
  }

  p {
    color: white;
    margin-top: 20px;
  }

`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    margin-bottom: 5px;

  }

  button {
    border-radius: 5px;
    border: none;
    padding: 5px;
    width: 100px;
    margin-top: 20px;
    font-weight: bolder;
    
  }
  
  

`;