import MainLayout from '@components/Layout/Layout';
import { dataInfo } from './constants';
import InfoCard from './InfoCard/InfoCard';
import styles from './styles.module.scss';

function Info() {
    const { container } = styles;
    return (
        <div>
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((item) => {
                        return <InfoCard content={item.content} description={item.description} src={item.src}></InfoCard>;
                    })}
                </div>
            </MainLayout>
        </div>
    );
}

export default Info;
