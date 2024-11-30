import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCartLight } from 'react-icons/pi';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { Link, useNavigate } from 'react-router-dom';

function MyHeader() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox, container, topHeader, fixedHeader } =
        styles;
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);

    const { isOpen, setIsOpen, type, setType } = useContext(SideBarContext);
    const navigate = useNavigate();

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    const handleNavigate = (type) => {
        if (type === 'ourshop') navigate('/shop');
    };

    useEffect(() => {
        setFixedPosition(scrollPosition > 80 ? true : false);
    }, [scrollPosition]);

    return (
        <div className={classNames(container, topHeader, { [fixedHeader]: fixedPosition })}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        <BoxIcon src={fbIcon} url={'https://www.facebook.com/nguyenthanhcong03'}></BoxIcon>
                        <BoxIcon src={insIcon} url={'https://www.facebook.com/nguyenthanhcong03'}></BoxIcon>
                        <BoxIcon src={ytbIcon} url={'https://www.facebook.com/nguyenthanhcong03'}></BoxIcon>
                    </div>
                    <div className={containerMenu}>
                        {/* {dataMenu.slice(0, 3).map((item) => {
                            return <Menu content={item.content} href={item.href}></Menu>;
                        })} */}
                        <Menu content={'Elements'} href={'/elements'}></Menu>
                        <Menu content={'Our Shop'} href={'/ourshop'}></Menu>
                        <Menu content={'About us'} href={'/aboutus'}></Menu>
                    </div>
                </div>
                <div>
                    <Link to={'/'}>
                        <img
                            src={Logo}
                            alt='Logo-retina'
                            style={{
                                width: '153px',
                                height: '53px'
                            }}
                        />
                    </Link>
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {/* {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return <Menu content={item.content} href={item.href} handleOpenSideBar={handleOpenSideBar}></Menu>;
                        })} */}
                        <Menu content={'Contacts'} href={'/contacts'}></Menu>
                        <Menu content={'Search'} href={'/search'}></Menu>
                        <Menu content={'Sign in'} href={'/signin'}></Menu>
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{ fontSize: '22px', cursor: 'pointer' }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <CiHeart
                            style={{ fontSize: '28px', cursor: 'pointer' }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <PiShoppingCartLight
                            style={{ fontSize: '24px', cursor: 'pointer' }}
                            onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
