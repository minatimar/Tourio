import Card from "../Card/Card";
import styled from "styled-components";
export default function CardList({ data }) {
  return (
    <>
      <hr />
      <StyledCardList>
        <ul>
          {data.map((newData) => (
            <li key={newData.id}>
              <Card data={newData} />
            </li>
          ))}
        </ul>
      </StyledCardList>
    </>
  );
}

const StyledCardList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;
