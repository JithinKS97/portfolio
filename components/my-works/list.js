import Link from "../Link";
import theme from "../../theme";

const List = ({ header, contents }) => (
  <div>
    <style>{style}</style>
    <h2>{header}</h2>
    <ol>
      {contents.map(({ link, title }) => (
        <Link link={link} title={title} />
      ))}
    </ol>
  </div>
);

const style = `
  h2 {
    margin:0;
    color: ${theme.headerColor}
  }
`;

export default List;
