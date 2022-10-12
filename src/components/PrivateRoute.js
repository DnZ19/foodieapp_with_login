import {Outlet, Navigate} from "react-router-dom";
import {useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase-config";

const PrivateRoutes = () => {

    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");

    return (
        <>
            {
                getEmail && getPassword ? <Outlet/>
                    : <Navigate to="/login"/>
            }
        </>

    )
}

export default PrivateRoutes