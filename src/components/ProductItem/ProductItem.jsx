import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function ProductItem({ src, previewSrc, name, price }) {
    const { boxImg, showImageWhenHover, showFunctionWhenHover, boxIcon, title, priceClass } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt='' />
                <img src={previewSrc} alt='' className={showImageWhenHover} />

                <div className={showFunctionWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceClass}>${price}</div>
        </div>
    );
}

export default ProductItem;
