import styles from './Sidebar.module.css';

const Sidebar = ({ children, className = '' }) => {
    return (
        <aside className={`${styles.sidebar} ${className}`}>
            {children}
        </aside>
    );
};

const Header = ({ children, className = '' }) => {
    return (
        <div className={`${styles.header} ${className}`}>
            {typeof children === 'string' ? <h1>{children}</h1> : children}
        </div>
    );
};

/* Updated SectionHeader to support icon */
const SectionHeader = ({ children, icon, className = '' }) => {
    return (
        <div className={`${styles.sectionHeader} ${className}`}>
            {icon && <span className={styles.sectionHeaderIcon}>{icon}</span>}
            <span className={styles.sectionHeaderText}>{children}</span>
        </div>
    )
}

const Nav = ({ children, className = '' }) => {
    return (
        <nav className={`${styles.navList} ${className}`}>
            {children}
        </nav>
    );
};

const Item = ({
    href = '#',
    isSelected = false,
    children,
    className = '',
    ...props
}) => {
    const itemClass = isSelected ? styles.itemSelected : styles.item;

    return (
        <a
            href={href}
            className={`${itemClass} ${className}`}
            aria-selected={isSelected}
            {...props}
        >
            <span>{children}</span>
        </a>
    );
};

const Footer = ({ children, className = '' }) => {
    return (
        <div className={`${styles.footer} ${className}`}>
            {children}
        </div>
    );
};

const Usage = ({ used, total, unit = 'GB', dangerThreshold = 0.9 }) => {
    const percentage = Math.min((used / total) * 100, 100);
    const isDanger = (used / total) >= dangerThreshold;

    return (
        <>
            <div className={styles.usageLabel}>Usage {used} {unit} / {total} {unit} ({Math.round(percentage)}%)</div>
            <div className={styles.usageBar}>
                <div
                    className={`${styles.usageBarFill} ${isDanger ? styles.usageBarFillDanger : ''}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </>
    );
};

Sidebar.Header = Header;
Sidebar.SectionHeader = SectionHeader;
Sidebar.Nav = Nav;
Sidebar.Item = Item;
Sidebar.Footer = Footer;
Sidebar.Usage = Usage;

export default Sidebar;
