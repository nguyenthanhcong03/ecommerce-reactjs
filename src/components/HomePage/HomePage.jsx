import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadline from '@components/AdvanceHeadline/AdvanceHeadline';
import Info from '@components/Info/Info';
import BestProducts from '@components/BestProducts/BestProducts';

function HomePage() {
    const { container } = styles;
    return (
        <div className={container}>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadline />
            <BestProducts />
        </div>
    );
}

export default HomePage;
