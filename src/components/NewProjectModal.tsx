import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

function NewProjectModal({
  setModalIsOpen,
}: {
  setModalIsOpen: (isOpen: boolean) => void;
}) {
  const [title, setTitle] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleTypeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <StModalBox>
      <StCloseBtn onClick={handleCloseModal}>X</StCloseBtn>
      <h3>Project Title</h3>
      <StProjectTitleInput
        type="text"
        value={title}
        ref={inputRef}
        onChange={handleTypeTitle}
      ></StProjectTitleInput>
      <StSubmitBtn>Start</StSubmitBtn>
    </StModalBox>
  );
}

export default NewProjectModal;

const StModalBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  right: 8%;
  top: 52%;
  z-index: 999;
  transform: translate(-50%, -50%);
  background-color: #e6e6e6;
  border-radius: 9px;
  width: 398px;
  height: 326px;
  padding: 15px;
  h3 {
    font-size: 30px;
    color: #ff3030;
    margin: 10px 0 0 0;
    padding: 0;
  }
`;
const StCloseBtn = styled.button`
  position: absolute;
  right: 5%;
  top: 5%;
  background-color: transparent;
  color: white;
  font-size: 30px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
const StProjectTitleInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 321px;
  height: 65px;
  border: none;
  border-radius: 9px;
  padding: 10px 20px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
const StSubmitBtn = styled.button`
  width: 165px;
  height: 59px;
  font-size: 25px;
  font-weight: 600;
  color: white;
  background-color: #ff3030;
  border-radius: 9px;
  border: none;
  cursor: pointer;
`;
