import styled from "styled-components";

export default function TitleBar() {
  return (
    <>
      <StyledHeader>
        <h1> Tourio </h1>
        <StyledButton>X</StyledButton>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: lime;
  margin: 0px;
  padding: 20px;
  width: 100%;
`;

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  border-color: lime;
  color: lime;
  background-color: white;
`;
