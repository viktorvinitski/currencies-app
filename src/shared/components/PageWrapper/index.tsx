import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';

type TProps = {
    children: ReactNode;
};

export const PageWrapper: FC<TProps> = ({ children }) => <div className={clsx('p-2', style['page-wrapper'])}>{children}</div>;
