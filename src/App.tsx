import { styled } from "styled-components";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import Setting from "./pages/Setting";

function App() {
  return (
    <StOuterFrame className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/project:id" element={<Project />} /> */}
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </StOuterFrame>
  );
}

export default App;

const StOuterFrame = styled.div`
  display: flex;
  justify-content: center;
`;
