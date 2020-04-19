import Link from 'next/link'

const Navbar = () => (
    <>
        <style>{styles}</style>
        <ul className='nav-bar'>
            <li><Link href="/index">My works</Link></li>
            <li><Link href="/aboutme">About me</Link></li>
            <li><Link href="/work-education">Work/education</Link></li>
        </ul>
    </>
)

export default Navbar

const styles = `
    .nav-bar {
        padding:0;
    }
    .nav-bar li {
        display:inline-block;
        margin-right:0.5rem;
        color:black;
    }
    .nav-bar a {
        text-decoration:none;
        color:darkgrey;
        font-weight:bold;
    }
    .nav-bar a:hover {
        text-decoration:none;
        color:lightgrey;
    }
`