import React from "react";
import styled from "styled-components";

function DialoguePopUp({content}) {

    return (
        <DialoguePopUpBox>
            <div>
                {content}
            </div>
        </DialoguePopUpBox>
    );
};

export default DialoguePopUp;

const DialoguePopUpBox = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: fixed;
  //z-index: 200;
  background: #00000050;
  width: 410px;
  height: 350px;
  
  b {
    color: var(--main-style-element-color);
  }
  
  h6 {
    color: #5b5454;
    padding: 10px 0;
  }
  
  button {
    margin-left: 70px;
    margin-top: 20px;
    padding: 5px;
    width: 100px;
    background: var(--main-style-element-color);
    border: none;
    border-radius: 5px;
    color: #5b5454;
    font-weight: bolder;
  }
  
  div {

    
      position: relative;
      width: 70%;
      margin: 0 auto;
      height: auto;
      max-height: 70vh;
      //margin-top: calc(100vh - 85vh - 20px);
      background: #fff;
      border-radius: 4px;
      padding: 20px;
      border: 1px solid var(--main-style-element-color);
      overflow: auto;

    }
`;

