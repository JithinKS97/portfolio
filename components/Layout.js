import Navbar from "./Navbar";
import Title from './Title'

const Layout = ({ children }) => {

  return (
    <>
      <style>{style}</style>
      <div className='wrapper'>
        <Title />
        <Navbar />
        {children}
      </div>
      <iframe src="https://editor.p5js.org/jithunni.ks/embed/Q19ApoNm4"></iframe>
    </>
  )
};

const style = `
  * {
    font-family:Roboto;
  }
  ol {
      padding-left:1rem;
  }
  .overall-wrapper {
    position: fixed;
    top:0;
    width: 100vw;
    height: 100vh;
  }
  .wrapper {
    width:70vw;
    margin:auto;
    min-width:600px;
    background-color:rgba(0,0,0,0);
  }
  iframe {
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    z-index:-1;
    margin:0;
    padding:0;
    border:none;
  }
  body {
    padding:0;
    margin:0;
  }
  html {
    background-color:black;
  }
`
export default Layout