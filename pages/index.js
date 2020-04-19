import GeneralArticles from "../components/my-works/GeneralArticles";
import TechnicalArticles from "../components/my-works/TechnicalArticles";
import Projects from "../components/my-works/Projects";
import Artworks from "../components/my-works/Artworks";
import Simulations from "../components/my-works/Simulations";
import Animations from "../components/my-works/Animations";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <>
      <style>{style}</style>
      <Layout>
        <div>
          <div>
            <Row components={[<TechnicalArticles />, <GeneralArticles />]} />
            <Row components={[<Projects />, <Artworks />]} />
            <Row components={[<Simulations />, <Animations />]} />
          </div>
        </div>
      </Layout>
    </>
  );
};

const Row = ({ components }) => (
  <>
    <div className="row">
      <div className='row-content'>{components[0]}</div>
      <div className='row-content'>{components[1]}</div>
    </div>
  </>
);

const style = `
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .row-content {
    width:50%;
  }
`;

export default Index;
