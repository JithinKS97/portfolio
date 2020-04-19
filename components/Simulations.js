import Link from './Link'

const Simulations = () => (
    <div>
        <h2>Simulations</h2>
        <ol>
           {simulations.map(({ link, title })=><Link link={link} title={title}/>)}
        </ol>
    </div>
)

const simulations = [
    {
        title: "Dynamic learning workbooks",
        link: "https://www.dynamiclearning.io/explore"
    },
    {
        title: "Damped oscillation",
        link: "https://jithinks97.github.io/Dynamic-Learning/DampedOscillation/index.html"
    },
    {
        title: "Djikstra's algorithm visualization",
        link: "https://jithinks97.github.io/Dynamic-Learning/Dijkstras/index.html"
    },,
    {
        title: "Interference experiment with bullets",
        link: "https://jithinks97.github.io/Dynamic-Learning/Interference-experiment-with-bullets/index.html"
    },
    {
        title: "Perceptron training",
        link: "https://jithinks97.github.io/Perceptron%20training/index.html"
    },
    {
        title: "Stability of atomic nucleus",
        link: "https://jithinks97.github.io/Dynamic-Learning/Stability%20of%20atomic%20nucleus/index.html"
    },
    {
        title: "Rotation of coordinate system",
        link: "https://jithinks97.github.io/Dynamic-Learning/Rotation%20of%20coordinate%20system/index.html"
    }
]

export default Simulations