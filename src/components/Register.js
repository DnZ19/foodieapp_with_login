import React from 'react';
import styled from "styled-components";
import {useState} from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {Link} from "react-router-dom";
import {auth} from "../firebase-config";
import ErrorPopUp from "./ErrorPopUp";
import DialoguePopUp from "./DialoguePopUp";

function Register() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    //error handling:
    const [isOpen, setIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    function togglePopup() {
        setIsOpen(!isOpen);
    }

    //dialogue
    const [dialogue, setDialogue] = useState(false);
    function toggleDialogue() {
        setDialogue(!dialogue);
    }

    const register = async () => {

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );

            console.log(user);


            if (user) {
                const delay = 5000;
                setTimeout(function () {
                    window.location.href = "/login";
                }, delay);

                //alert("registration is a success, you will be redirected to the login page in 5 seconds!");
                toggleDialogue();



            } else {
                alert("registration failed, please try again")
            }


        } catch (error) {
            console.error(error);
            const errorCode = error.code;
            const errorMessage = error.message;

            setErrorMessage(errorCode && errorMessage)
            console.log(errorMessage);
            togglePopup();

            // alert(errorCode && errorMessage);
        }
    };

    return (
        <RegisterForm>
            <h2>Register</h2>

            {isOpen &&
                <ErrorPopUp
                    content={<>
                        <b>Something went wrong!</b>
                        <h6>{errorMessage}</h6>
                        <button
                            onClick={togglePopup}
                        >Close
                        </button>
                    </>}

                />}

            {dialogue &&
                <DialoguePopUp
                    content={<>
                        <b>You're successfully registered!</b>
                        <h6>You will be redirected to login in 5 seconds...</h6>
                        <button
                            onClick={toggleDialogue}
                        >Close
                        </button>
                    </>}

                />}

            <FormContainer>
                <input placeholder="Email" onChange={(e) => {
                    setRegisterEmail(e.target.value)
                }}/>
                <input placeholder="Password" onChange={(e) => {
                    setRegisterPassword(e.target.value)
                }}/>

                <button
                    onClick={register}
                    disabled={!registerEmail || !registerPassword}

                > Sign Up
                </button>


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