import styles from './AppCards.module.css';

const AppSection = ({ title, actionLink, children, className = '' }) => {
    return (
        <div className={className}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {actionLink}
            </div>
            <div className={styles.grid}>
                {children}
            </div>
        </div>
    );
};

const Link = ({ href = '#', children, className = '', ...props }) => {
    return (
        <a href={href} className={`${styles.sectionLink} ${className}`} {...props}>
            {children}
        </a>
    )
}

const Card = ({ href = '#', icon, label, className = '', ...props }) => {
    return (
        <a href={href} className={`${styles.card} ${className}`} {...props}>
            <div className={styles.cardContent}>
                {icon}
                <span>{label}</span>
            </div>
        </a>
    );
};

AppSection.Link = Link;
AppSection.Card = Card;

export default AppSection;
