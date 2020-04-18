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
        title: "Dyuthi GEC Parallax effect (night)",
        link: "https://jithinks97.github.io/GEC/Parallax%20finished/Parallax_night/sketch/index.html"
    },
    {
        title: "Dyuthi GEC Parallax effect (day)",
        link: "https://jithinks97.github.io/GEC/Parallax%20finished/Parallax/sketch/index.html"
    },
    {
        title: "Text spring effect",
        link: "https://jithinks97.github.io/TEDX/index.html"
    }
]

export default Artworks