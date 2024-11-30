import classNames from 'classnames';
import styles from './styles.module.scss';
import { SideBarContext } from '@contexts/SideBarProvider';
import { useContext } from 'react';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import Cart from '@components/ContentSideBar/Cart/Cart';
import Wishlist from '@components/ContentSideBar/Wishlist/Wishlist';
function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRenderContentSideBar = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return <Wishlist />;
            case 'cart':
                return <Cart />;
            default:
                return <Login />;
        }
    };

    return (
        <div className={container}>
            <div className={classNames({ [overlay]: isOpen })} onClick={handleToggle}></div>
            <div className={classNames(sideBar, { [slideSideBar]: isOpen })}>
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                {handleRenderContentSideBar()}
            </div>
        </div>
    );
}

export default SideBar;
