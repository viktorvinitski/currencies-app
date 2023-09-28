import LogoSvg from 'shared/icons/Logo.tsx';
import { Link } from 'react-router-dom';

const version = import.meta.env.REACT_APP_NAME || '213';

const links = [
    { title: 'Currencies', path: '/currencies' },
    { title: 'Taxes', path: '/taxes' },
];

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <LogoSvg />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ps-3 pe-3">
                        {links.map(link => (
                            <li className="nav-item" key={link.title}>
                                <Link to={link.path} className="nav-link">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {version}
            </div>
        </nav>
    );
};
