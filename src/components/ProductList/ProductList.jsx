import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from './styles.module.scss';

function ProductList() {
    const { productContainer } = styles;
    const { products } = useContext(OurShopContext);
    console.log(products);

    return (
        <>
            <MainLayout>
                <div className={productContainer}>
                    {products.map((item) => {
                        return (
                            <ProductItem
                                key={item._id}
                                src={item.images[0]}
                                previewSrc={item.images[1]}
                                name={item.name}
                                price={item.price}
                                details={item}
                            />
                        );
                    })}
                </div>
            </MainLayout>
        </>
    );
}

export default ProductList;
