import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

function Banner() {
    const { container, content, title, description, boxBtn } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>XStore Marseille04 Demo</h1>
                <div className={description}>Make yours celebrations even more special this years with beautiful.</div>
                <div className={boxBtn}>
                    <Link to={'/ourshop'}>
                        <Button content={'Go to shop'} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;
