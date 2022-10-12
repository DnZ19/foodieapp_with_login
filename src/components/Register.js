import React from 'react';
import styled from "styled-components";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";


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

        } catch (e) {
            console.error( e );
        }
    };

    return (
        <RegisterForm>
            <h2>Register</h2>

                <FormContainer>
                    <input placeholder="Email" onChange={( e ) => {setRegisterEmail(e.target.value)}}/>
                    <input placeholder="Password" onChange={( e ) => {setRegisterPassword(e.target.value)}}/>

                    <button onClick={register}> Sign Up </button>


                </FormContainer>

                <p>
                    Already registered?<br />
                    <span className="line">
                        <a href="/login">Sign In</a>
                        </span>
                </p>

        </RegisterForm>
    );
}

export default Register;

const RegisterForm = styled.div`

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