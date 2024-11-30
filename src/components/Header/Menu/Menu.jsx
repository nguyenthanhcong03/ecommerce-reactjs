import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { Link } from 'react-router-dom';

function Menu({ content, href, handleOpenSideBar }) {
    const { menu } = styles;

    return (
        <Link to={href} style={{ textDecoration: 'none', color: '#333' }}>
            <div className={menu} onClick={() => handleOpenSideBar('login')}>
                {content}
            </div>
        </Link>
    );
}

export default Menu;
