import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadline from '@components/AdvanceHeadline/AdvanceHeadline';
import Info from '@components/Info/Info';
import BestProducts from '@components/BestProducts/BestProducts';
import { getProducts } from '@/apis/productsService';
import { useEffect, useState } from 'react';
import PopularProducts from '@components/PopularProducts/PopularProducts';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
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
            <PopularProducts data={listProducts.slice(2, listProducts.length)} />
        </>
    );
}

export default HomePage;
