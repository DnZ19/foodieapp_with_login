import React from 'react';
import styled from "styled-components";


function Account () {

    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");

    const handleClick=()=>  {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <AccountBody>
            <h2>Account details</h2>

            <AccountContainer>
                {
                    getEmail && getPassword
                        ? <p>You are logged in at account
                            : {getEmail}</p> : ""
                }
                <button onClick={handleClick}>Sign Out</button>
            </AccountContainer>
        </AccountBody>
    );
}

export default Account ;

const AccountBody = styled.div`

  margin-top: 100px;
  height: 620px;
  width: 100%;
  
  h2 {
    color: white;
  }

`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 150px;
  margin: 20px 0;
  
  p {
    color: var(--main-style-element-color);
    margin-bottom: 15px;
  }
  
  button {
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 100px;
    
  }
`;