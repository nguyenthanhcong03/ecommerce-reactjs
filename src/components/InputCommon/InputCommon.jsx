import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

function InputCommon({ label, type, isRequired = false }) {
    const { container, lableInput, boxInput, boxIcon } = styles;
    const isPassword = type === 'password';
    const [showPassword, setShowPassword] = useState(true);
    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={container}>
            <div className={lableInput}>
                {label} {isRequired ? '*' : ''}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {isPassword && <div className={boxIcon} onClick={handleShowPassword}>{showPassword ? <FiEye /> : <FiEyeOff />}</div>}
            </div>
        </div>
    );
}

export default InputCommon;
