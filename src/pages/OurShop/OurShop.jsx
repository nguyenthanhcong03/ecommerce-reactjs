import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import countdownBanner2 from '@images/countdownBanner2.jpeg';
import { OurShopProvider } from '@contexts/OurShopProvider';
import Filter from '@components/Filter/Filter';
import ProductList from '@components/ProductList/ProductList';

function OurShop() {
    const { breadcrumbContainer, breadcrumbItem, bannerContainer } = styles;
    return (
        <OurShopProvider>
            <MyHeader />
            <MainLayout>
                <div className={breadcrumbContainer}>
                    <div>
                        <div className={breadcrumbItem}>Home</div> <span>&gt;</span> Our Shop
                    </div>
                    <div>
                        <span>&lt;</span> <div className={breadcrumbItem}>Return to previous page</div>
                    </div>
                </div>
                <div className={bannerContainer}>
                    <CountdownBanner backgroundImage={countdownBanner2} />
                </div>
                <div>
                    <Filter />
                    <ProductList />
                </div>
            </MainLayout>
        </OurShopProvider>
    );
}

export default OurShop;
