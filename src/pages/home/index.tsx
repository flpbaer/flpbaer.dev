import { Description, StyledButton, Title } from "../../assets/styles/globalStyles";
import { Container, DrawableTech, Image, Left, Right, TextContent } from "./style";
import hand from "../../assets/images/👋.svg";
import drawable from "../../assets/images/Drawable.png";
function Home() {
  
  return (
    <Container>
      <Left>
        <TextContent>
          <Title
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi!
          </Title>
          <Image
            src={hand}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </TextContent>
        <div style={{width: "60%"}}>
          <Description>
            Nice to meet you, I'm Felipe Bäer and I'm a software developer
            focused on front-end
          </Description>
        </div>
        <StyledButton>Download CV</StyledButton>
      </Left>
      <Right>
        <DrawableTech></DrawableTech>
      </Right>
    </Container>
  );
}

export default Home;

// <Title>Hi!</Title>
//               <img
//                 src={hand}
//                 style={{
//                   marginLeft: "12px",
//                 }}
//               />
//             </TitleContent>
//             <DescriptionContent>
//               <Description>
//                 Nice to meet you, I'm Felipe Bäer and I'm a software developer
//                 focused on front-end
//               </Description>
