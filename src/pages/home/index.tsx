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
function Home() {
  const { width } = useWindowDimensions();

  const renderDesktop = (
    <>
      <Container>
        <span
          style={{
            position: "absolute",
            top: "30px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.6,
          }}
        >
          send me a e-mail!{" "}
          <span
            style={{ color: "#00B2FF" }}
            onClick={() =>
              window.open(
                "mailto:flpbaer@gmail.com?subject=I'm interested&body=Hi Felipe"
              )
            }
          >
            click here
          </span>
        </span>
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
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </TextContent>
          <div style={{ width: "60%" }}>
            <Description
              initial={{ opacity: 0, y: 180 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Nice to meet you, I'm Felipe Bäer and I'm a software developer
              focused on front-end
            </Description>
          </div>
          <SocialArea
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <StyledButton onClick={() => window.open(curriculum)}>
              Download CV
            </StyledButton>
            <FaLinkedin
              size={40}
              style={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/felipebaer/")
              }
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
            variants={{
              grow: {
                scale: 1.1,
              },
              rotate: {
                rotate: [null, -5, 5, 0],
                transition: {
                  duration: 25,
                },
              },
              initial: {
                y: [-20, 20],
                rotate: 16,
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  repeatType: "reverse",
                },
              },
            }}
          >
            <BiLogoTypescript size={100} style={{ color: "#017ACB" }} />
          </FloatIcon>
          <DrawableTech
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
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
            animate={["initial"]}
            variants={{
              grow: {
                scale: 1.1,
              },
              rotate: {
                rotate: [null, -5, 5, 0],
                transition: {
                  duration: 22,
                },
              },
              initial: {
                y: [-20, 20],
                rotate: -16,
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  repeatType: "mirror",
                },
              },
            }}
            style={{ top: "70%", left: "55%", transform: "rotate(-16deg)" }}
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
    </>
  );

  return width > 900 ? (
    renderDesktop
  ) : (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Kanit, sans-serif",
        color: "rgba(0,0,0,0.5)",
      }}
    >
      <span style={{ width: "60%" }}>
        This site is not yet available in the mobile version, coming soon...
      </span>
      <div style={{ position: "absolute", bottom: "10px" }}>
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
      </div>
    </div>
  );
}

export default Home;
