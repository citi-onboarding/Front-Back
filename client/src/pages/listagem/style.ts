import styled from "styled-components";

interface CardAccountProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 2rem;
`;

export const ContentBox = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-self: self-end;
  justify-content: space-around;
  width: 20%;
  gap: 12%;
  height: 60%;

  margin-bottom: 2%;
`;

export const ButtonEdit = styled.div`
  min-width: 170px;
  display: flex;
  border-radius: 4px;
  background: #f29100;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 160%;
  padding: 2% 2%;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    background-color: #d98200;
  }
`;

export const ButtonAdd = styled.div`
  min-height: 30px;
  min-width: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f29100;
  border-radius: 50%;
  padding: 2%;
  cursor: pointer;
  &:hover {
    background-color: #d98200;
  }
`;

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 15%;
  grid-column-gap: 6%;
  width: 100%;
`;

export const CardAccount = styled.div<CardAccountProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  flex-wrap: wrap;
  flex-grow: 1;
  display: flex;
  padding: 5% 4% 5% 10%;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 6px;
  border: 2px solid ${(props) => props.color};
  position: relative;
  row-gap: 1rem;
  box-shadow: 6px 6px 6px 0px rgba(242, 145, 0, 0.25);

  &:hover {
    background-color: rgba(242, 145, 0, 0.25);
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-top: 5%;
  h1 {
    color: #000;
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const ContentCardText = styled.div`
  display: flex;
  row-gap: 2%;
  flex-direction: column;
  white-space: nowrap;
  overflow:hidden p {
    color: #000;
  }
  h2 {
    color: #000;
  }
`;

export const ContentCard = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;

  display: flex;
  gap: 4%;
  width: 90%;
  align-items: center;
  p {
    margin: 0;
  }
`;

export const CardDescription = styled.p`
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CardName = styled.h2`
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardPrice = styled.h2`
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  top: 70%;
  left: 75%;
`;
export const CardButton = styled.div`
  cursor: pointer;
  & .icon {
    fill: #f29100;
  }

  & :hover {
    > svg {
      > path {
        stroke: "blue";
      }
    }
  }
`;
