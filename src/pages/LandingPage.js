import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LandingPageImage from "../assets/Foodie_LandingPage.svg";



function LandingPage () {

    const navigate = useNavigate();

    function handleClickLogin() {
        navigate("/login");
    }

    function handleClickRegister() {
        navigate("/register");
    }

    return (
        <LandingPageContainer>

            <LandingPageInnerContainer>
                <div>
                    <button onClick={handleClickLogin}>Login</button>
                    <button onClick={handleClickRegister}>Register</button>

                </div>

            </LandingPageInnerContainer>



        </LandingPageContainer>
    );
}

export default LandingPage ;

const LandingPageContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 620px;
  width: 100%;
  margin-top: 100px;
  //border: 1px solid black;
  
`;

const LandingPageInnerContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-image: url(${LandingPageImage});
  background-size: cover;
  
  width: 100%;
  height: 500px;
  border-radius: 5px;
  //border: 1px solid black;
  margin-top: -140px;
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 100px;
  }
  
  
  button {
    width: 250px;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin: 10px;
    background-color: var(--main-style-element-color);
    color: white;
    font-weight: bolder;
    cursor: pointer;
    
  }
  

`;