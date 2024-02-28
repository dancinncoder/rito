import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";

function Navbar() {
  const { id }: { id?: string } = useParams(); // useParams에서 반환되는 값은 객체로 {id: string} 타입이라고 추론됩니다.
  const [selectedTab, setSelectedTab] = useState<string>(String(id) || "");

  // 현재 경로를 가져옵니다.
  const location = useLocation();
  console.log(location);

  const selectedStyle = {
    backgroundColor: "white",
    color: "#ff3030", // 선택된 탭의 글자색을 변경할 수 있습니다.
  };

  return (
    <StNavbar>
      <StLogo>LITO</StLogo>
      <StTabList>
        <StHomeTab
          to="/"
          style={location.pathname === "/" ? selectedStyle : {}}
        >
          HOME
        </StHomeTab>
        {/* <StSettingTab
          to="/project/:id"
          style={location.pathname === "/project/:id" ? selectedStyle : {}}
        > */}
        <StSettingTab
          to="/setting"
          style={location.pathname === "/setting" ? selectedStyle : {}}
        >
          SETTING
        </StSettingTab>
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
  font-size: 55px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  margin: 20px;
  padding: 10px;
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

const StHomeTab = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background-color: transparent;
  border: none;
  height: 85px;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
`;

const StSettingTab = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background-color: transparent;
  border: none;
  height: 85px;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
`;

const StCopyRight = styled.span`
  font-size: 15px;
  color: white;
  align-items: center;
  justify-self: center;
  margin-bottom: 30px;
`;
