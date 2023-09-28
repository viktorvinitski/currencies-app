import { FC, ReactNode } from 'react';

type TProps = {
    children: ReactNode;
};

export const PageWrapper: FC<TProps> = ({ children }) => <div className="p-2 h-100">{children}</div>;

export default PageWrapper;
