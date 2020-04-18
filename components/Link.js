const Link = ({ link, title }) => {
    return (
    <li><a target="_blank" href={link}>{title}</a></li>
    )
}

export default Link