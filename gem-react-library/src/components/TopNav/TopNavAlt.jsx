import { useState, useRef, useEffect } from 'react';
import styles from './TopNavAlt.module.css';
import { MagnifyingGlass, SlidersHorizontal, CaretDown, Gear, Lifebuoy, SignOut } from '@phosphor-icons/react';
import { Button } from '../../components';

const TopNavAlt = ({ children, className = '' }) => {
    return (
        <header className={`${styles.headerAlt} ${className}`}>
            <div className={styles.container}>
                {children}
            </div>
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

const Search = ({ placeholder = 'Search...', onSearch, className = '' }) => {
    const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

    return (
        <div className={`${styles.search} ${className}`}>
            <div className={styles.searchInputWrapper}>
                <i><MagnifyingGlass size={18} /></i>
                <input type="text" placeholder={placeholder} onChange={onSearch} />

                <button
                    className={`${styles.advancedSearchTrigger} ${isAdvancedOpen ? styles.advancedSearchTriggerActive : ''}`}
                    onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                    aria-label="Toggle Advanced Search"
                >
                    <SlidersHorizontal size={18} />
                </button>
            </div>

            {/* Advanced Search Panel */}
            <div className={`${styles.advancedSearchPanel} ${isAdvancedOpen ? styles.advancedSearchPanelOpen : ''}`}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>From</label>
                    <input type="text" className={styles.formInput} placeholder="Sender name or email" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>To</label>
                    <input type="text" className={styles.formInput} placeholder="Recipient" />
                </div>
                <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                    <label className={styles.formLabel}>Subject</label>
                    <input type="text" className={styles.formInput} placeholder="Contains words..." />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Date Range</label>
                    <select className={styles.formSelect}>
                        <option>Any time</option>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Folder</label>
                    <select className={styles.formSelect}>
                        <option>All Folders</option>
                        <option>Inbox</option>
                        <option>Sent</option>
                        <option>Drafts</option>
                    </select>
                </div>
                <div className={styles.panelActions}>
                    <Button variant="secondary" onClick={() => setIsAdvancedOpen(false)}>Cancel</Button>
                    <Button variant="primary">Search</Button>
                </div>
            </div>
        </div>
    );
};

const Actions = ({ children, className = '' }) => {
    return (
        <div className={`${styles.actions} ${className}`}>
            {children}
        </div>
    )
}

const Link = ({ href = '#', icon, title, isActive = false, className = '', ...props }) => {
    return (
        <a
            href={href}
            title={title}
            className={`${styles.linkAlt} ${className}`}
            aria-current={isActive ? 'page' : undefined}
            {...props}
        >
            {icon}
        </a>
    )
}

const Separator = () => <div className={styles.separator}></div>;

const Profile = ({ icon, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    // Click outside to close
    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [containerRef]);

    return (
        <div className={styles.profileContainer} ref={containerRef}>
            <button
                className={`${styles.profileTrigger} ${isOpen ? styles.profileTriggerActive : ''} ${className}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {icon}
                <CaretDown size={14} />
            </button>

            {isOpen && (
                <div className={styles.profileMenu}>
                    <div className={styles.menuHeader}>
                        <span className={styles.userName}>John Doe</span>
                        <span className={styles.userEmail}>john.doe@example.com</span>
                    </div>
                    <a href="#settings" className={styles.menuItem}><Gear size={18} /> Settings</a>
                    <a href="#support" className={styles.menuItem}><Lifebuoy size={18} /> Support</a>
                    <a href="#logout" className={`${styles.menuItem} ${styles.menuItemLogout}`}><SignOut weight="fill" size={18} /> Logout</a>
                </div>
            )}
        </div>
    )
}

TopNavAlt.Logo = Logo;
TopNavAlt.Search = Search;
TopNavAlt.Actions = Actions;
TopNavAlt.Link = Link;
TopNavAlt.Separator = Separator;
TopNavAlt.Profile = Profile;

export default TopNavAlt;
