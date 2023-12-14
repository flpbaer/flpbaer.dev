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
  TextContent,
} from "./style";
import hand from "../../assets/images/👋.svg";
import blur from "../../assets/images/blur.svg";
import blur2 from "../../assets/images/blur2.svg";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
function Home() {
  const infos = `const me = [{ name: "Felipe Baer", age: 17 }]

const techs = [{ 
    front: [
     "html5", 
     "css3", 
     "javascript", 
     "typescript", 
     "react.js", 
     "next.js", 
     "node.js"
     ],
    back: ["java","node.js"],
    infra: ["git(CI/CD - Pipeline)"],
    cloud: ["aws"],
    test: ["jest"],
    pratices: [
     "test driven development(tdd)",
     "solid"
     ]
   }];

const languages = [{ 
  
    fluent: ["portuguese (pt-br)"],
    intermediate: [
     "english (eng)",
     "spanish (es)",
   ] 
 }];
  `;

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
            transition={{ duration: 1, delay: 0.8 }}
          />
        </TextContent>
        <div style={{ width: "60%" }}>
          <Description>
            Nice to meet you, I'm Felipe Bäer and I'm a software developer
            focused on front-end
          </Description>
        </div>
        <StyledButton>Download CV</StyledButton>
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
                // repeatDelay: 0.2,
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
                duration: 15,
              },
            },
            initial: {
              y: [-20, 20],
              rotate: -16,
              transition: {
                duration: 3,
                repeat: Infinity,
                // repeatDelay: 0.2,
                repeatType: "reverse",
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
  );
}

export default Home;
