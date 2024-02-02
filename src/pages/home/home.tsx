import {
  Description,
  StyledButton,
  Title,
} from "../../assets/styles/globalStyles";
import {
  Container,
  DrawableTech,
  FloatIcon,
  Image,
  Left,
  Link,
  Muted,
  Right,
  SocialArea,
  TextContent,
} from "./style";
import hand from "../../assets/images/👋.svg";
import blur from "../../assets/images/blur.svg";
import blur2 from "../../assets/images/blur2.svg";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { BiLogoTypescript } from "react-icons/bi";
import curriculum from "../../assets/Curriculum Felipe Baer.pdf";
import { FaReact, FaLinkedin, FaGithub } from "react-icons/fa";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { infos } from "./info/info";
import useWindowDimensions from "../../hooks/useWindow";
import {
  animationDescription,
  animationDrawable,
  animationFloatIcon1,
  animationFloatIcon2,
  animationImage,
  animationSocial,
  animationTitle,
} from "../../assets/animations/animation";
import MobileRender from "./mobile/mobile";
function Home() {
  const { width } = useWindowDimensions();

  const renderDesktop = (
    <Container>
      <Muted>
        send me a e-mail!
        <Link
          onClick={() => window.open("mailto:flpbaer@gmail.com?subject=I'm interested&body=Hi Felipe")}
        >
          click here
        </Link>
      </Muted>
      <Left>
        <TextContent>
          <Title
            animate={animationTitle.animate}
            initial={animationTitle.initial}
            transition={animationTitle.transition}
          >
            Hi!
          </Title>
          <Image
            src={hand}
            initial={animationImage.initial}
            animate={animationImage.animate}
            transition={animationImage.transition}
          />
        </TextContent>
        <div style={{ width: "60%" }}>
          <Description
            initial={animationDescription.initial}
            animate={animationDescription.animate}
            transition={animationDescription.transition}
          >
            Nice to meet you, I'm Felipe Bäer and I'm a software developer
            focused on front-end
          </Description>
        </div>
        <SocialArea
          initial={animationSocial.initial}
          animate={animationSocial.animate}
          transition={animationSocial.transition}
        >
          <StyledButton onClick={() => window.open(curriculum)}>
            Download CV
          </StyledButton>
          <FaLinkedin
            size={40}
            style={{ cursor: "pointer", marginLeft: "10px" }}
            onClick={() => window.open("https://www.linkedin.com/in/felipebaer/")}
          />
          <FaGithub
            size={40}
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={() => window.open("https://www.github.com/flpbaer/")}
          />
        </SocialArea>
        <img
          src={blur}
          style={{ position: "absolute", left: "0", bottom: "80px" }}
        />
      </Left>
      <Right>
        <FloatIcon
          style={{ right: "80px", top: "110px", transform: "rotate(16deg)" }}
          animate={["initial"]}
          variants={animationFloatIcon1}
        >
          <BiLogoTypescript size={100} style={{ color: "#017ACB" }} />
        </FloatIcon>
        <DrawableTech
          initial={animationDrawable.initial}
          animate={animationDrawable.animate}
          transition={animationDrawable.transition}
        >
          <div style={{ padding: "20px", width: "100%" }}>
            <span style={{ fontFamily: "Azeret Mono", fontSize: "18px" }}>
              <SyntaxHighlighter
                showLineNumbers
                language="javascript"
                style={atomOneDark}
                customStyle={{ backgroundColor: "transparent" }}
              >
                {infos}
              </SyntaxHighlighter>
            </span>
          </div>
        </DrawableTech>
        <FloatIcon
          style={{ top: "70%", left: "55%", transform: "rotate(-16deg)" }}
          animate={["initial"]}
          variants={animationFloatIcon2}
        >
          <FaReact size={100} style={{ color: "#61DAFB" }} />
        </FloatIcon>
        <img
          src={blur2}
          style={{
            position: "absolute",
            right: "20px",
            top: "70px",
            opacity: 0.7,
          }}
        />
      </Right>
    </Container>
  );

  return width > 900 ? renderDesktop : <MobileRender />;
}

export default Home;
