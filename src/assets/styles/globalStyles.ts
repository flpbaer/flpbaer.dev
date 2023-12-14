import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
font-family: 'Kanit', sans-serif;
overflow: hidden;
}

img {
    user-select: none;
    pointer-events: none;
}
`

export const Description = styled.span`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  font-size: 32px;
`;

export const Title = styled(motion.h1)`
  font-weight: 500;
  font-size: 86px;
`;

export const StyledButton = styled.button`
 width: 260px;
 height: 60px;
 border: 1px solid rgba(0, 0, 0, 0.1);
 border-radius: 6px;
 font-weight: 400;
 font-size: 18px;
 -webkit-backdrop-filter: blur(345px);
 backdrop-filter: blur(345px);
 font-family: "Kanit";
 cursor: pointer;
 transition: all 0.3s ease;

 &:hover {
   background-color: #fff;

 }
`;