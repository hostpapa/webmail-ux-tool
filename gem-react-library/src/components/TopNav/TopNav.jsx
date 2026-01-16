import styles from './TopNav.module.css';

const TopNav = ({ children, className = '' }) => {
    return (
        <header className={`${styles.header} ${className}`}>
            <nav className={styles.container}>
                {children}
            </nav>
        </header>
    );
};

const Logo = ({ href = '#', children, className = '' }) => {
    return (
        <div className={`${styles.logo} ${className}`}>
            <a href={href} className={styles.logo}>
                {typeof children === 'string' ? <span className={styles.logoText}>{children}</span> : children}
            </a>
        </div>
    );
};

const Links = ({ children, className = '' }) => {
    return (
        <div className={`${styles.links} ${className}`}>
            {children}
        </div>
    );
};

const Link = ({ href = '#', isActive = false, icon, children, className = '', ...props }) => {
    const linkClass = isActive ? styles.linkActive : styles.link;

    return (
        <a href={href} className={`${linkClass} ${className}`} aria-current={isActive ? 'page' : undefined} {...props}>
            {icon}
            <span>{children}</span>
        </a>
    );
};

const Actions = ({ children, className = '' }) => {
    return (
        <div className={`${styles.actions} ${className}`}>
            {children}
        </div>
    );
};

TopNav.Logo = Logo;
TopNav.Links = Links;
TopNav.Link = Link;
TopNav.Actions = Actions;

export default TopNav;
