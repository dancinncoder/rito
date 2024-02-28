import React from "react";
import { styled } from "styled-components";

function Navbar() {
  return (
    <StNavbar>
      <StLogo>LITO</StLogo>
      <StTabList>
        <StButton>HOME</StButton>
        <StButton>PROJECTS</StButton>
      </StTabList>
      <StCopyRight>© 2024 LITO</StCopyRight>
    </StNavbar>
  );
}

export default Navbar;

const StNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ff3030;
  width: 20%;
  height: 100vh;
`;

const StLogo = styled.p`
  font-size: 50px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  margin: 20px;
  padding: 5px;
`;

const StTabList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid yellow; */
  margin: 0 0 250px 0;
  padding: 0;
  gap: 0;
`;

const StButton = styled.button`
  width: 100%;
  color: white;
  background-color: transparent;
  border: none;
  height: 85px;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
`;

const StCopyRight = styled.span`
  font-size: 15px;
  color: white;
  align-items: center;
  justify-self: center;
  margin-bottom: 30px;
`;
