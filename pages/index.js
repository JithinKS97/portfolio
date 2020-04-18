import ReactMarkdown from 'react-markdown'
import GeneralArticles from '../components/GeneralArticles'
import TechnicalArticles from '../components/TechnicalArticles'
import Projects from '../components/Projects'
import Artworks from '../components/Artworks'
import Simulations from '../components/Simulations'
import Animations from '../components/Animations'

const Index = ({content}) => {
    console.log(content)
  return (
    <>
      <style>{styles}</style>
        <div className="page-wrapper">  
        <div className='introduction'>
          <ReactMarkdown source={content.default} />
        </div>
        <div>
          <Row components={[<GeneralArticles/>, <TechnicalArticles/>]}/>
          <Row components={[<Projects/>, <Artworks/>]}/>
          <Row components={[<Simulations/>, <Animations/>]}/>
        </div>
      </div>
    </>
  );
};

const Row = ({components}) => (
  <>
  <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
    <div style={{ width:'50%' }}>
      {components[0]}
    </div>
    <div style={{ width:'50%' }}>
      {components[1]}
    </div>
  </div>
  </>
)

Index.getInitialProps = async ctx => {
    const content = await require(`../markdown/introduction.md`)
    return { content }
}

const styles = `
    .page-wrapper {
        width:80vw;
        margin:auto;
        font-family:Roboto;
    }
`;

export default Index;
