
import Link from '../Link'

const Animations = () => (
    <div>
        <h2>Animations</h2>
        <ol>
           {animations.map(({ link, title })=><Link link={link} title={title}/>)}
        </ol>
    </div>
)

const animations = [
    {
        title: "AnimateBig (Youtube animation channel)",
        link: "https://www.youtube.com/user/animatebig/videos"
    },
    {
        title: "Dude at coffee shop",
        link: "https://www.youtube.com/watch?v=blNn2rKyjA0"
    },
    {
        title: "Wise dude on top of mountain",
        link: "https://www.youtube.com/watch?v=FQ8XlLlXE70"
    }
]

export default Animations