import { useEffect } from 'react';
import styles from './Toast.module.css';
import { Info, CheckCircle, WarningCircle } from '@phosphor-icons/react';

const icons = {
    info: Info,
    success: CheckCircle,
    error: WarningCircle
};

const Toast = ({ message, type = 'info', icon, onClose, duration = 3000 }) => {
    useEffect(() => {
        if (duration > 0 && onClose) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const typeClass = styles[type] || '';
    const IconComponent = icon || icons[type] || Info;

    return (
        <div className={`${styles.toast} ${typeClass}`}>
            <div className={styles.icon}>
                <IconComponent size={20} weight="fill" />
            </div>
            <span>{message}</span>
        </div>
    );
};

const ToastContainer = ({ toasts }) => {
    /* toasts expected to be array of objects: { id, message, type... } */
    if (!toasts || toasts.length === 0) return null;

    return (
        <div className={styles.container}>
            {toasts.map((toast) => (
                <Toast key={toast.id} {...toast} />
            ))}
        </div>
    )
}

export { Toast, ToastContainer };
