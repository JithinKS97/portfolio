import Link from '../Link'

const List = ({ header, contents }) => (
    <div>
        <h2>{header}</h2>
        <ul>
           {contents.map(({ link, title })=><Link link={link} title={title}/>)}
        </ul>
    </div>
)

export default List