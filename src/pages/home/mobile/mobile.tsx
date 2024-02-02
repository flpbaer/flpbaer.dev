import { FaGithub, FaLinkedin } from 'react-icons/fa'

function MobileRender() {
  return (
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
  )
}

export default MobileRender