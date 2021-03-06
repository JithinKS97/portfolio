import {
  TechnicalArticles,
  GeneralArticles,
  Projects,
  Artworks,
  Simulations,
  Animations,
} from "../components/my-works/main";
import Layout from '../components/Layout'
import theme from '../theme'

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
      <div className="row-content">{components[0]}</div>
      <div className="row-content">{components[1]}</div>
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
    background-color:#101010;
    margin:2px;
    border-radius:${theme.borderRadius};
    padding:10px;
  }
  @media only screen and (max-width: 800px) {
    .row {
      flex-direction: column;
    }
    .row-content {
      width:100%;
    }
  }
`;

export default Index;
