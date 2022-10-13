import React from 'react';
import styled from "styled-components";
import LandingPageImage from "../assets/fork.svg";



function Terms() {

    return (
        <Rick>
            <h3>Meet Rick</h3>

            <iframe id="rick" allow='autoplay' width="400" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameBorder="0"
                    allowFullScreen></iframe>


        </Rick>
    );
}

export default Terms;

const Rick = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-top: 100px;

  width: 410px;
  height: 600px;
  // background-image: url(${LandingPageImage});
  // background-size: cover;
  //border: 1px solid black;
`;