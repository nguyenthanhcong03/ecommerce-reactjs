import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';

function HomePage() {
    const { container } = styles;
    return (
        <div className={container}>
            <MyHeader />
            <Banner />
        </div>
    );
}

export default HomePage;
