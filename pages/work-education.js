import Layout from "../components/Layout"
import ReactMarkdown from 'react-markdown'

const WorkEducation = (props) => {

  const content = props.default

  return (
    <>
      <Layout>
        <ReactMarkdown  source={content}/>
      </Layout>
    </>
  );
};

WorkEducation.getInitialProps = async ctx => {
  const res = await require('../markdown/work-education.md')
  return res
}

export default WorkEducation;
