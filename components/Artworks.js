import Link from './Link'

const Artworks = () => (
    <div>
        <h2>Artworks</h2>
        <ol>
           {simulations.map(({ link, title })=><Link link={link} title={title}/>)}
        </ol>
    </div>
)

const simulations = [
    {
        title: "Coverpage of Dyuthi website",
        link: "https://jithinks97.github.io/GEC/Parallax%20finished/Parallax_night/sketch/index.html"
    },
    {
        title: "Spring effect on text",
        link: "https://jithinks97.github.io/TEDX/index.html"
    }
]

export default Artworks