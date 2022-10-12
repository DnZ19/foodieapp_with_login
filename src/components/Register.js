import React from 'react';
import styled from "styled-components";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {auth} from "../firebase-config";


function Register () {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );

            console.log(user);


            if (user){
                const delay = 5000;
                setTimeout(function() {
                    window.location.href = "/login";
                }, delay);
                alert("registration is a success, you will be redirected to the login page in 5 seconds!");
            } else {
                alert("registration failed, please try again")
            }


        } catch (error) {
            console.error( error );
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorCode && errorMessage);
        }
    };

    return (
        <RegisterForm>
            <h2>Register</h2>

                <FormContainer>
                    <input placeholder="Email" onChange={( e ) => {setRegisterEmail(e.target.value)}}/>
                    <input placeholder="Password" onChange={( e ) => {setRegisterPassword(e.target.value)}}/>

                    <button
                        onClick={register}
                        disabled={!registerEmail || !registerPassword}

                    > Sign Up </button>


                </FormContainer>

                <p>
                    Already registered?
                    <Link
                        to="/login"
                        style={{
                            textDecoration: "none",
                            color: "var(--main-style-element-color)",
                            fontSize: 15
                        }}

                    > Sign in here!
                    </Link>
                </p>

            {/*{ user ? <p>Registration is a success! Please login <Link to="/login"> here.</Link></p> : ""}*/}

        </RegisterForm>
    );
}

export default Register;

const RegisterForm = styled.div`

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