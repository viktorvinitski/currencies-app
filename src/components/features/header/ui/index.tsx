import LogoSvg from 'shared/icons/Logo.tsx';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const version = APP_VERSION;

const links = [
    { title: 'Currencies', path: '/currencies' },
    { title: 'Taxes', path: '/taxes' },
    { title: 'Calculator', path: '/calculator' },
];

export const Header = () => {
    const location = useLocation();
    const getIsActiveLink = (path: string) => location.pathname === path;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <LogoSvg />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ps-3 pe-3 gap-1">
                        {links.map(link => (
                            <Link
                                to={link.path}
                                className={clsx('nav-link p-1', getIsActiveLink(link.path) && 'active text-decoration-underline')}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </ul>
                </div>
                v. {version}
            </div>
        </nav>
    );
};
