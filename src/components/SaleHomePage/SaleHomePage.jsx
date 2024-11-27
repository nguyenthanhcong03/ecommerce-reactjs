import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';

function SaleHomePage() {
    const { container, boxImage, boxContent, title, des, boxBtn } = styles;

    const [scrollDirection, setScrollDirection] = useState(null);
    const previousScrollPosition = useRef(0);

    const [translateXPosition, setTranslateXPosition] = useState(50);
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDirection('up');
        }
        previousScrollPosition.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };

    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition >= 1600) {
            setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 8);
        } else if (scrollDirection === 'up') {
            setTranslateXPosition(translateXPosition >= 50 ? 50 : translateXPosition + 8);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => {
            window.removeEventListener('scroll', scrollTracking);
        };
    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{ transform: `translateX(${translateXPosition}px)`, transition: 'transform 0.5s ease' }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div className={boxContent}>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
                <div className={boxBtn}>
                    <Button content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImage}
                style={{ transform: `translateX(-${translateXPosition}px)`, transition: 'transform 0.5s ease' }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>

        </div>
    );
}

export default SaleHomePage;
