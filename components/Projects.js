import Link from './Link'

const Projects = () => (
    <div>
        <h2>Projects</h2>
        <ol>
           {projects.map(({ link, title })=><Link link={link} title={title}/>)}
        </ol>
    </div>
)

const projects = [
    {
        title: "Dynamic learning",
        link: "https://www.dynamiclearning.io/"
    }
]

export default Projects