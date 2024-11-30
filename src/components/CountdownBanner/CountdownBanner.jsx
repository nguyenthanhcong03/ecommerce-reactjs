import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { Link } from 'react-router-dom';

function CountdownBanner({ backgroundImage }) {
    const { container, containerTimer, boxBtn, title } = styles;
    const targetDate = '2025-12-31T00:00:00';
    return (
        <div
            className={container}
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn}>
                <Link to={'/ourshop'}>
                    <Button content={'Buy now'} />
                </Link>
            </div>
        </div>
    );
}

export default CountdownBanner;
