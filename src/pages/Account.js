import React from 'react';
import styled from "styled-components";


function Account () {

    const handleClick=()=>  {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <AccountBody>
            <h2>Account details</h2>

            <AccountContainer>

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

`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

`;