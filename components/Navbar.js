import Link from "next/link";
import { withRouter } from 'next/router'

const Navbar = ({ router }) => {
  
  console.log(router)  

  return (
    <>
      <style>{styles}</style>
      <ul className="nav-bar">
        {links.map(({ title, route }) => (
            <li>
                <Link href={route}>
                    <div className={router.pathname===route?'selected':'not-selected'}>{title}</div>
                </Link>
            </li>
        ))}
      </ul>
    </>
  );
};

const links = [
    {
        title:'My works',
        route: '/'
    },
    {
        title:'About me',
        route:'/aboutme'
    },
    {
        title: 'Work/education',
        route:'/work-education'
    }
]

export default withRouter(Navbar);

const styles = `
    .nav-bar {
        padding:0;
    }
    .nav-bar li {
        display:inline-block;
        margin-right:0.5rem;
        color:black;
    }
    .selected {
        color:white;
    }
    .not-selected {
        color:darkgrey;
        cursor:pointer;
    }
    .not-selected:hover {
        color:lightgrey;
        cursor:pointer;
    }
`;
