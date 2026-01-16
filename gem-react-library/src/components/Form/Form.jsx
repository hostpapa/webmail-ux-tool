import { useState } from 'react';
import styles from './Form.module.css';
import { Eye, EyeSlash } from '@phosphor-icons/react';

const FormGroup = ({ label, htmlFor, children, className = '' }) => {
    return (
        <div className={`${styles.formGroup} ${className}`}>
            {label && <label htmlFor={htmlFor} className={styles.label}>{label}</label>}
            {children}
        </div>
    );
};

const Input = ({ type = 'text', className = '', ...props }) => {
    return (
        <input type={type} className={`${styles.input} ${className}`} {...props} />
    );
};

const PasswordInput = ({ className = '', ...props }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.passwordWrapper}>
            <input
                type={show ? 'text' : 'password'}
                className={`${styles.passwordInput} ${className}`}
                {...props}
            />
            <button
                type="button"
                className={styles.passwordToggle}
                aria-label={show ? "Hide password" : "Show password"}
                onClick={() => setShow(!show)}
            >
                {show ? <EyeSlash size={20} /> : <Eye size={20} />}
            </button>
        </div>
    );
};

FormGroup.Input = Input;
FormGroup.PasswordInput = PasswordInput;

export default FormGroup;
export { Input, PasswordInput };
