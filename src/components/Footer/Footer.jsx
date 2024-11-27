import styles from './styles.module.scss';
import subLogo from '@icons/images/marseille-logo.png';
import pay from '@icons/images/pay.png';
import { dataMenu } from './constant';

function MyFooter() {
    const { container, boxLogo, boxMenu, boxPay, menuItem } = styles;
    return (
        <div className={container}>
            <div className={boxLogo}>
                <img src={subLogo} alt='' />
            </div>
            <div className={boxMenu}>
                {dataMenu.map((item) => {
                    return <div className={menuItem}>{item.content}</div>;
                })}
            </div>
            <div className={boxPay}>
                <p>Guaranteed safe ckeckout</p>
                <div><img src={pay} alt="" /></div>
            </div>
            <p>Copyright © 2024 XStore theme. Created by nguyenthanhcong03.</p>
        </div>
    );
}

export default MyFooter;
