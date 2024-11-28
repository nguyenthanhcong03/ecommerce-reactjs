import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Menu({ content, href, handleOpenSideBar }) {
    const { menu } = styles;

    return (
        <div className={menu} onClick={() => handleOpenSideBar('login')}>
            {content}
        </div>
    );
}

export default Menu;
