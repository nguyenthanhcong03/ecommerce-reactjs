import styles from './styles.module.scss';


function HeaderSideBar({ icon, text }) {
    const { title, container, boxIcon } = styles;

    return (
        <div className={container}>
            <div className={boxIcon}>{icon}</div>
            <span className={title}>{text}</span>
        </div>
    );
}

export default HeaderSideBar;
