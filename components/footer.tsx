import { FaDiscord, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { Row } from "./element";

const Wrapper = styled(Row)`
  gap: 20px;
  font-size: 34px;
  width: 100%;
  padding-top: 10px;
  justify-content: center;
  background-color: #fdf9e5;
  a {
    color: #5b463f;
  }
`;
export const Footer = () => {
  return (
    <Wrapper>
      <a href="https://discord.gg/ssAcaUkJY9">
        <FaDiscord />
      </a>
      <a href="https://twitter.com/TheSUOC">
        <FaTwitter />
      </a>
    </Wrapper>
  );
};