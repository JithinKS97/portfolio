import GeneralArticles from '../components/my-works/GeneralArticles'
import TechnicalArticles from '../components/my-works/TechnicalArticles'
import Projects from '../components/my-works/Projects'
import Artworks from '../components/my-works/Artworks'
import Simulations from '../components/my-works/Simulations'
import Animations from '../components/my-works/Animations'
import Layout from '../components/Layout'

const Index = () => {
  return (
    <>
        <Layout>
        <div>  
        <div>
          <Row components={[ <TechnicalArticles/>, <GeneralArticles/>]}/>
          <Row components={[<Projects/>, <Artworks/>]}/>
          <Row components={[<Simulations/>, <Animations/>]}/>
        </div>
      </div>
      </Layout>
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

export default Index;
