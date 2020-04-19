import Layout from "../components/Layout"
import ReactMarkdown from 'react-markdown'
import theme from '../theme'

const WorkEducation = (props) => {

  const content = props.default

  return (
    <>
      <style>{style}</style>
      <Layout>
        <div className='work-education'>
          <ReactMarkdown source={content}/>
        </div>
      </Layout>
    </>
  );
};

const style = `
  .work-education {
    background-color:${theme.lightBackground};
    padding:10px;
    border-radius:${theme.borderRadius};
    margin-bottom:2rem;
  }
  .work-education li {
    color: ${theme.writings}
  }
  .work-education h2 {
    color: ${theme.headerColor};
    margin:0;
    filter: drop-shadow(2px 2px black);
  }
`

WorkEducation.getInitialProps = async ctx => {
  const res = await require('../markdown/work-education.md')
  return res
}

export default WorkEducation;
