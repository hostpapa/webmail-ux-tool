import styles from './Button.module.css';

/**
 * Button Component
 * Use for actions, form submissions, and toolbar tools.
 *
 * @param {string} variant - 'primary' | 'secondary' | 'tertiary' | 'icon'
 * @param {boolean} isLoading - Shows loading spinner
 * @param {string} loadingText - Text to show while loading (hidden for icon variant)
 */
const Button = ({
    variant = 'primary',
    children,
    isLoading = false,
    className = '',
    loadingText = 'Loading',
    type = 'button',
    ...props
}) => {
    const variantClass = styles[variant] || styles.primary;

    const combinedClassName = [
        styles.base,
        variantClass,
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            type={type}
            className={combinedClassName}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                <>
                    <div className={styles.spinner}></div>
                    {variant !== 'icon' && <span>{loadingText}</span>}
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
