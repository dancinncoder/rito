import { styled } from "styled-components";
import Navbar from "../components/Navbar";

function Setting() {
  return (
    <StHomeContainer>
      <Navbar />
      <StMain>
        <h1>TEMP</h1>
      </StMain>
    </StHomeContainer>
  );
}

export default Setting;

const StHomeContainer = styled.div`
  border: red 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
`;

const StMain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  width: 80%;
  height: 100vh;
  h1 {
    color: #ff3030;
    padding: 40px 60px;
    margin: 0;
    font-size: 40px;
    font-weight: 600;
  }
`;
