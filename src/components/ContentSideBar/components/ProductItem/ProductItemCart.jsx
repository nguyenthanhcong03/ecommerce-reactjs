import styles from './styles.module.scss';
import { TfiClose } from 'react-icons/tfi';

function ProductItemCart({ name, price, src }) {
    const { container, boxContent, titleItem, priceItem, closeIcon } = styles;

    return (
        <div className={container}>
            <img
                src={src}
                alt=''
            />
            <div className={boxContent}>
                <div className={titleItem}>{name}</div>
                <div className={priceItem}>${price}</div>
            </div>
            <div>
                <TfiClose className={closeIcon} />
            </div>
        </div>
    );
}

export default ProductItemCart;
