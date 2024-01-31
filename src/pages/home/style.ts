
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 20px;
`;


export const Left = styled.div `
flex: 1;
padding: 20px;
margin: 120px 80px;

`;

export const TextContent = styled.div`
display: flex;
`;


export const Right = styled.div`
flex: 1;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
`;

export const DrawableTech = styled(motion.div)`
width: 650px;
border-radius: 30px;
min-height: 70%;
max-height: 80%;
display: flex;
flex-direction: column;
align-items: center;
background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 12%);
box-shadow: 0px -15px 24px 0px rgba(0, 0, 0, 0.10);
`

export const Image = styled(motion.img)`
margin-left: 12px;
`

export const SocialArea = styled(motion.div)`
display: flex;
align-items: center;
margin-top: 30px;
`

export const FloatIcon = styled(motion.div)`
width: 100px;
height: 100px;
padding: 16px;
background-color: #fff;
z-index: 2;
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px;
position: absolute;
animation: float 4s ease-in infinite;
box-shadow: 0px 1px 21.8px 0px rgba(0, 0, 0, 0.10);


`;