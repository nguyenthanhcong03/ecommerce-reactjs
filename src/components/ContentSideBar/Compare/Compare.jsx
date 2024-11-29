import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import ProductItemCart from '../components/ProductItem/ProductItemCart';
import Button from '@components/Button/Button';

function Compare() {
    const { container, boxContent } = styles;

    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar icon={<TfiReload style={{ fontSize: '24px' }} />} text='COMPARE'></HeaderSideBar>
                <ProductItemCart
                    name='Product 1'
                    price='100'
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                />
            </div>
            <div>
                <Button content={'VIEW COMPARE'} />
            </div>
        </div>
    );
}

export default Compare;
