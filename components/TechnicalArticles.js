import Link from './Link'

const Articles = () => (
    <div>
        <h2>Technical articles</h2>
        <ol>
           {articles.map(({ link, title })=><Link link={link} title={title}/>)}
        </ol>
    </div>
)

const articles = [
    {
        title: "Understanding the Universe through code",
        link: "https://dev.to/jithinks97/understanding-the-universe-through-code-dg8"
    },
    {
        title: "Writing clean code in React",
        link: "https://dev.to/jithinks97/writing-clean-react-code-2mcm"
    }
]

export default Articles