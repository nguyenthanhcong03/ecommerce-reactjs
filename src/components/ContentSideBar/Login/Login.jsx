import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function Login() {
    const { container, title, boxRememberMe, forgotPassword } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon label='Username or email' type='text' isRequired={true} />
            <InputCommon label='Password' type='password' isRequired={true} />
            <div className={boxRememberMe}>
                <input type='checkbox' name='' id='' />
                <span>Remember Me</span>
            </div>
            <Button content={'LOGIN'} />
            <div className={forgotPassword}>Forgot your password?</div>
        </div>
    );
}

export default Login;
