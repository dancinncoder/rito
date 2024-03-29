import { keyframes, styled } from "styled-components";
import Navbar from "../components/Navbar";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { useState } from "react";
import NewProjectModal from "../components/NewProjectModal";

type ProjectType = {
  id: string;
  title: string;
};

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  //dummy data
  const projects: ProjectType[] = [
    { id: uuid(), title: "PROJECT 01" },
    { id: uuid(), title: "PROJECT 02" },
    { id: uuid(), title: "PROJECT 03" },
    { id: uuid(), title: "PROJECT 04" },
  ];

  const showModal = () => {
    setModalIsOpen(true);
    if (modalIsOpen === true) setModalIsOpen(false);
  };

  return (
    <StHomeContainer>
      {modalIsOpen && <NewProjectModal setModalIsOpen={setModalIsOpen} />}
      <Navbar />
      <StMain>
        <StTitleWrapper>
          <h1>MY PROJECTS</h1>
        </StTitleWrapper>

        <StProjectList>
          {projects.map((project: ProjectType) => {
            return (
              <StProject key={project.id} to="/project/:id">
                <StProjectTitle>{project?.title}</StProjectTitle>
              </StProject>
            );
          })}
        </StProjectList>
        <StNewProject onClick={showModal}>+ New Project</StNewProject>
      </StMain>
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.div`
  border: #d0d0d0 1px solid;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 1200px;
`;

const StMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 80%;
  height: 100vh;
`;

const StTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  h1 {
    text-align: left;
    color: #ff3030;
    padding: 40px 60px;
    margin: 0;
    font-size: 40px;
    font-weight: 600;
    /* border: 1px solid purple; */
    width: 100%;
  }
`;

const StProjectList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  width: 100%;
  height: 80%;
  padding: 30px;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const StProject = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  min-width: 230px;
  width: 230px;
  height: 130px;
  background-color: #ff3030;
  text-decoration: none;
  border-radius: 9px;
  margin: 30px;
  transition: ease-in-out 0.15s;
  &:hover {
    background-color: #d62a2a;
    transform: scale(1.02);
  }
`;

const StProjectTitle = styled.h3``;

const StNewProject = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  height: 82px;
  font-size: 25px;
  font-weight: 600;
  border: 4px solid #ff3030;
  color: #ff3030;
  background: white;
  background-size: 200% auto;
  padding: 10px;
  margin: 30px;
  border-radius: 9px;
  cursor: pointer;
  transition: ease-in-out 0.3s;
  &:hover {
    font-size: 25.5px;
    /* transform: scale(1.009); */
  }
`;
