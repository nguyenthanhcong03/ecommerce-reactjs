import styles from './styles.module.scss';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCartLight } from 'react-icons/pi';
import ProductItemCart from '../components/ProductItem/ProductItemCart';
import Button from '@components/Button/Button';

function Cart() {
    const { container, boxContent, boxBtn, boxSubTotal } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar icon={<PiShoppingCartLight style={{ fontSize: '28px' }} />} text='CART'></HeaderSideBar>
                <ProductItemCart
                    name='Product 1'
                    price='100'
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                />
            </div>
            <div>
                <div className={boxSubTotal}>
                    <p>SUBTOTAL:</p>
                    <p>$199.76</p>
                </div>
                <div className={boxBtn}>
                    <Button content={'VIEW CART'} />
                    <Button content={'CHECKOUT'} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
