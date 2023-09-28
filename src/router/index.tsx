import { Header } from 'components/features/header/ui';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from 'shared/components/PageWrapper';

const routesList = [
    { path: '/', element: <>Hello</> },
    { path: '/currencies', element: <>qweqweqwe</> },
    { path: '/taxes', element: <>asdasd </> },
];

const Router = () => (
    <>
        <Header />
        <Routes>
            {routesList.map(route => (
                <Route key={route.path} path={route.path} element={<PageWrapper>{route.element}</PageWrapper>} />
            ))}
        </Routes>
    </>
);

export default Router;
