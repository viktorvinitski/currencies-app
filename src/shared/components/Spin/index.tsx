import { ReactNode } from 'react';
import style from './style.module.scss';

type TProps = {
    children: ReactNode;
    spinning: boolean;
};

export const Spin = ({ children, spinning }: TProps) => {
    if (spinning) {
        return (
            <div className={style['spin-container']}>
                <div className="spinner-border text-secondary" role="status" />
            </div>
        );
    }

    return children;
};
