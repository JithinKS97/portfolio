import Layout from "../components/Layout"
import ReactMarkdown from 'react-markdown'
import theme from '../theme'

const AboutMe = (props) => {

  const content = props.default

  return (
    <>
      <Layout>
        <style>{style}</style>
        <div className='about-me'>
          <ReactMarkdown  source={content}/>
        </div>
      </Layout>
    </>
  );
};

const style = `
  .about-me {
    background-color:#101010;
    color:lightgrey;
    padding:20px;
    border-radius:${theme.borderRadius};
  }
  .aboutme p {
    color:grey;
  }
`

AboutMe.getInitialProps = async ctx => {
  const res = await require('../markdown/aboutme.md')
  return res
}

export default AboutMe;
