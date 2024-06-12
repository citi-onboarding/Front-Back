import { Button } from "@mui/material";
import styled from "styled-components";

interface ButtonProps {
  height?: string;
  width?: string;
  letterSpacing?: string;
  textTransfrom?: string;
  borderRadius?: string;
  padding?: string;
  font?: string;
  fontWeight?: string;
  margin?: string;
  textColor?: string;
  alignSelf?: string;
  background?: string;
  border?: string;
}

export const Container = styled.form`
  flex-direction: row;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  border: 0.3em solid;
  border-radius: 0.4em;
  column-gap: 7em;
  flex-wrap: wrap;
  padding: 2em 6em;
  align-items: center;
  justify-content: space-between;
`;
export const ContentContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  h4{
    font-size: 2em;
    color: #000000;
  
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  gap: 2em;
  justify-content: space-between;
  margin-top: 1.5em;
  width: 100%;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  width: 100%;
`;

const ButtonCustom = styled(Button)<ButtonProps>`
  &.MuiButton-root {
    height: ${(props) => props.height || "2em"};
    width: ${(props) => props.width || "73.2em"};
    letter-spacing: ${(props) => props.letterSpacing || "1.25px"};
    text-transform: ${(props) => props.textTransfrom || "none"};
    border-radius: ${(props) => props.borderRadius || "0.6em"};
    font-size: ${(props) => props.font || "12px"};
    font-weight: ${(props) => props.fontWeight || "500"};
    margin: ${(props) => props.margin || "0"};
    color: ${(props) => props.textColor || "#000000"};
    align-self: ${(props) => props.alignSelf || "auto"};
    background-color: ${(props) => props.background || "rgba(242, 145, 0, 1)"};
  }
`;

export const SubmitButton = styled(ButtonCustom)`
  &.MuiButton-root {
    background-color: ${(props) => props.background || "rgba(242, 145, 0, 1)"};
    display: flex;
    justify-content: center;
    margin-top: ${(props) => props.margin?.split(" ")[0] || "1.8em"};
    &:hover {
      background-color: ${(props) => props.background || "rgba(242, 145, 0, 1)"};
    }
  }
`;