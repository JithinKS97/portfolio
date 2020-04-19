import Layout from "../components/Layout"
import ReactMarkdown from 'react-markdown'

const AboutMe = (props) => {

  const content = props.default

  return (
    <>
      <Layout>
        <ReactMarkdown  source={content}/>
      </Layout>
    </>
  );
};

AboutMe.getInitialProps = async ctx => {
  const res = await require('../markdown/aboutme.md')
  return res
}

export default AboutMe;
