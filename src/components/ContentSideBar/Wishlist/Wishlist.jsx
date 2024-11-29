import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { CiHeart } from 'react-icons/ci';
import ProductItemCart from '../components/ProductItem/ProductItemCart';
import Button from '@components/Button/Button';

function Wishlist() {
    const { container, boxContent, boxBtn } = styles;

    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar icon={<CiHeart style={{ fontSize: '28px' }} />} text='COMPARE'></HeaderSideBar>
                <ProductItemCart
                    name='Product 1'
                    price='100'
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                />
            </div>
            <div className={boxBtn}>
                <Button content={'VIEW WISHLIST'} />
                <Button content={'ADD ALL TO CART'} isPrimary={false} />
            </div>
        </div>
    );
}

export default Wishlist;
