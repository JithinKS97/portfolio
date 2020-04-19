import Link from '../Link'

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
        title: "Improving Science and Math education using p5.js",
        link: "https://medium.com/processing-foundation/improving-science-and-math-education-using-p5-js-d434beea465c"
    },
    {
        title: "Writing clean code in React",
        link: "https://dev.to/jithinks97/writing-clean-react-code-2mcm"
    },
    {
        title: "Understanding the Universe through code",
        link: "https://dev.to/jithinks97/understanding-the-universe-through-code-dg8"
    }
]

export default Articles