import theme from '../theme'

const Link = ({ link, title }) => {
    return (
        <div className='work-link'>
            <style>{style}</style>
            <li>
                <a target="_blank" href={link}>{title}</a>
            </li>
        </div>
    )
}

const style = `
  .work-link a {
    color:${theme.linkColor};
    text-decoration:none;
  }
  .work-link a:hover {
    color:${theme.linkHoverColor};
  }
  .work-link li {
    color:grey;
  }
`

export default Link