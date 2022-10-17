import React from "react";
import Home from "./Home";
import {Route, Routes, Redirect} from "react-router-dom";
import SearchPage from "./SearchPage";
import Recipe from "./Recipe";
import Healthy from "./Healthy";
import Account from "./Account";
import About from "./About";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoutes from "../components/PrivateRoute";
import LandingPage from "./LandingPage";
import Terms from "../components/Terms";

function Pages()    {
    return  (

        <Routes>

            {/*Outside login*/}
            <Route path="/" exact element={<LandingPage />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/about" element={<About />}/>
            <Route path="/terms" element={<Terms />}/>

            {/*Inside login*/}
            <Route element={<PrivateRoutes />}>
                <Route path="/" exact element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/search" element={<SearchPage />}/>
                <Route path="/search/:search/" element={<SearchPage />}/>
                <Route path="/recipe/:id" element={<Recipe />}/>
                <Route path="/healthy" element={<Healthy />}/>
                <Route path="/healthy/:diet" element={<Healthy />}/>
                <Route path="/account" element={<Account />}/>
            </Route>

        </Routes>
    )
};

export default Pages;