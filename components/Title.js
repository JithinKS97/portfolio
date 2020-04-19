import theme from '../theme'

const Title = () => (
    <div>
      <style>{style}</style>
      <h1 className="title">When you wake</h1>
      <div className="sub-title">Portfolio website of Jithin KS</div>
    </div>
  );

const style = `
  .title {
    font-size:40px;
    display: inline-block;
    margin:0;
    color: ${theme.titleColor};
  }
  .sub-title {
    display: inline-block;
    margin-left: 0.5rem;
    color:${theme.subTitleColor}
  }
`

export default Title