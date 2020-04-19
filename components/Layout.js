import Navbar from "./Navbar";
import Title from './Title'
import theme from '../theme'
import { useState, useEffect } from 'react'

const Layout = ({ children }) => {

  const [dimensions, setDimensions] = useState({width:0, height:0})

  useEffect(()=>{
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  },[])

  return (
    <>
      <style>{style}</style>
      <div className='wrapper'>
        <Title />
        <Navbar />
        {children}
      </div>
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
  .wrapper {
    width:70vw;
    margin:auto;
    min-width:600px;
  }
  body {
    background-color:${theme.darkBackground};
  }
`;

export default Layout;