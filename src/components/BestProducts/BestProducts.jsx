import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function BestProducts({ data }) {
    const { container, containerItem } = styles;
    const targetDate = '2025-12-31T00:00:00';
    console.log(data);

    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
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
