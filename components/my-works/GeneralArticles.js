import Link from '../Link'

const Articles = () => (
    <div>
        <h2>General articles</h2>
        <ol>
           {articles.map(({ link, title })=><Link link={link} title={title}/>)}
        </ol>
    </div>
)

const articles = [
    {
        title: "The most beautiful feeling",
        link: "https://medium.com/@jithunni.ks/the-most-beautiful-feeling-b74aa7f82ba0"
    },
    {
        title: "Something that I wish to witness before I leave",
        link: "https://medium.com/@jithunni.ks/everyone-who-has-ever-lived-every-story-that-has-ever-been-told-every-event-that-has-ever-a779464d8783"
    },
    {
        title: "Two questions that will help you to lead a fulfilled life!",
        link: "https://medium.com/@jithunni.ks/i-have-found-two-important-questions-to-which-you-need-to-find-answers-which-will-help-you-ea0470531a6b"
    }
    ,{
        title: "Are we becoming a machine during Examination",
        link: "https://medium.com/@jithunni.ks/are-we-becoming-a-machine-during-examination-2f6afc0c9a7c"
    }
]

export default Articles