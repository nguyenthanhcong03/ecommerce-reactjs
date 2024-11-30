import styles from '../styles.module.scss';

function BoxIcon({ src, url }) {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return insIcon;
            case 'ytb':
                return ytbIcon;
        }
    };

    return (
        // <div className={boxIcon}>
        //     <img src={handleRenderIcon(type)} alt={type} href={href} />
        // </div>
        <a href={url} target='_blank' rel='noopener noreferrer' className={boxIcon}>
            <img src={src} />
        </a>
    );
}

export default BoxIcon;
