// import { Header } from 'components/features/header/ui';
import { Route, Routes } from 'react-router-dom';
import { PageWrapper } from 'shared/components/PageWrapper';
import { Currencies } from 'components/pages/currencies';
import { Taxes } from 'components/pages/taxes';
import { Header } from 'components/features/header/ui';

const routesList = [
    { path: '/', element: <>Hello</> },
    { path: '/currencies', element: <Currencies /> },
    { path: '/taxes', element: <Taxes /> },
    { path: '/calculator', element: <></> },
];

export const Router = () => (
    <>
        <Header />
        <Routes>
            {routesList.map(route => (
                <Route key={route.path} path={route.path} element={<PageWrapper>{route.element}</PageWrapper>} />
            ))}
        </Routes>
    </>
);
