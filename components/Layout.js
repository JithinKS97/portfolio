import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <style>{style}</style>
    <div className='wrapper'>
      <Title />
      <Navbar />
      {children}
    </div>
  </>
);

const theme = {
  darkBackground:'black',
  titleColor:'white',
  subTitleColor:'darkgrey',
  headerColor: '#ee2a4d'
}

const style = `
  .title {
    font-size:40px;
    display: inline-block;
    margin:0;
    color: ${theme.titleColor}
  }
  .sub-title {
    display: inline-block;
    margin-left: 0.5rem;
    color:${theme.subTitleColor}
  }
  * {
    font-family:Roboto;
  }
  ol {
      padding-left:1rem;
  }
  .wrapper {
    width:70vw;
    margin:auto;
    min-width:600px;
  }
  h2 {
    margin:0;
    color: ${theme.headerColor}
  }
  body {
    background-color:${theme.darkBackground};
  }
  a {
    color:grey;
    text-decoration:none;
  }
  a:hover {
    color:white;
  }
  li {
    color:white;
  }
`;

export default Layout;

const Title = () => (
  <div>
    <h1 className="title">When you wake</h1>
    <div className="sub-title">Portfolio website of Jithin KS</div>
  </div>
);
