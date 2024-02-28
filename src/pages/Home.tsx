import { styled } from "styled-components";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <StHomeContainer>
      <Navbar />
      <StMain>
        <h1>start here1122</h1>
      </StMain>
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.div`
  border: red 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
`;

const StMain = styled.div`
  background-color: #ffffff;
  width: 80%;
  height: 100vh;
`;
