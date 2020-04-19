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

const style = `
  .title {
    display: inline-block;
    margin:0;
  }
  .sub-title {
    display: inline-block;
    margin-left: 0.5rem;
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
  }
  h2 {
    margin:0;
  }
`;

export default Layout;

const Title = () => (
  <div>
    <h1 className="title">Wenuwake</h1>
    <div className="sub-title">Portfolio website of Jithin KS</div>
  </div>
);
