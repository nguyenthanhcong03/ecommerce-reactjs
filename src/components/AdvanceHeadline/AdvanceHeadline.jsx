import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeadline() {
    const { container, des, title } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <span className={des}>don't miss super offers</span>
                <h2 className={title}>Our best products</h2>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeadline;
