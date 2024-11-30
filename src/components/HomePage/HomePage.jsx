import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadline from '@components/AdvanceHeadline/AdvanceHeadline';
import Info from '@components/Info/Info';
import BestProducts from '@components/BestProducts/BestProducts';
import { getProducts } from '@/apis/productsService';
import { useEffect, useState } from 'react';
import PopularProducts from '@components/PopularProducts/PopularProducts';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import MyFooter from '@components/Footer/Footer';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        const query = {
            sortType: '0',
            page: 1,
            limit: '10'
        };

        getProducts(query).then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadline />
            <BestProducts data={listProducts.slice(0, 2)} />
            <PopularProducts data={listProducts.slice(2, 10)} />
            <SaleHomePage />
            <MyFooter />
        </>
    );
}

export default HomePage;
