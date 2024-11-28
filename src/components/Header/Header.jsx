import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCartLight } from "react-icons/pi";
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';

function MyHeader() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox, container, topHeader, fixedHeader } =
        styles;
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);

    const { isOpen, setIsOpen, type, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        setFixedPosition(scrollPosition > 80 ? true : false);
    }, [scrollPosition]);

    return (
        <div className={classNames(container, topHeader, { [fixedHeader]: fixedPosition })}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return <BoxIcon type={item.type} href={item.href}></BoxIcon>;
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return <Menu content={item.content} href={item.href}></Menu>;
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo-retina'
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return <Menu content={item.content} href={item.href} handleOpenSideBar={handleOpenSideBar}></Menu>;
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload style={{ fontSize: '22px', cursor: 'pointer' }} onClick={() => handleOpenSideBar('compare')} />
                        <CiHeart style={{ fontSize: '28px', cursor: 'pointer' }} onClick={() => handleOpenSideBar('wishlist')} />
                        <PiShoppingCartLight style={{ fontSize: '24px', cursor: 'pointer' }} onClick={() => handleOpenSideBar('cart')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
