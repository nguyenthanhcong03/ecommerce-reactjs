import ProductItem from '@components/ProductItem/ProductItem';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import ProductItemCart from '../components/ProductItem/ProductItemCart';

function Compare() {
    const { container } = styles;

    return (
        <div className={container}>
            <HeaderSideBar icon={<TfiReload style={{ fontSize: '24px' }} />} text='COMPARE'></HeaderSideBar>
            <ProductItemCart name='Product 1' price='100' src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg' />
        </div>
    );
}

export default Compare;
