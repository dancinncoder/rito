import { styled } from "styled-components";
import Navbar from "../components/Navbar";

function Project() {
  return (
    <StHomeContainer>
      <Navbar />
      <StMain>
        <h1>Projects 01</h1>
      </StMain>
    </StHomeContainer>
  );
}

export default Project;

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
