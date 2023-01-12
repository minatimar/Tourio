import Image from "next/image";
import styled from "styled-components";

export default function Card({ data }) {
  return (
    <>
      <StyledCard>
        <StyledImage src={data.image} alt={data.name} />
        <div>{data.name}</div>
        <p>Location: {data.location}</p>
      </StyledCard>
    </>
  );
}
const StyledCard = styled.div`
  border: 1px solid pink;
  margin: 0px 25px 20px 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 100%;
`;
