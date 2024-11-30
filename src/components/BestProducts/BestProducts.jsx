import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';
import countdownBanner1 from '@images/countdownBanner1.jpeg';

function BestProducts({ data }) {
    const { container, itemContainer, bannerContainer } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <div className={bannerContainer}>
                    <CountdownBanner backgroundImage={countdownBanner1} />
                </div>
                <div className={itemContainer}>
                    {data.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            previewSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            details={item}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default BestProducts;
