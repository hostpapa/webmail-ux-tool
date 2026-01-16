import { useState } from 'react';
import {
    TopNavAlt, Sidebar, Button, ToastContainer
} from '../components';
import styles from './ConnectedAccounts.module.css';
import {
    GoogleLogo, MicrosoftOutlookLogo, Cloud, EnvelopeSimple,
    User, Globe, Link as LinkIcon, ShieldCheck, Trash, CheckCircle,
    Calendar, Users, CheckSquare, UserCircle
} from '@phosphor-icons/react';

const ConnectedAccounts = () => {
    const [accounts, setAccounts] = useState([]);
    const [toasts, setToasts] = useState([]);

    const addToast = (msg) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message: msg, type: 'success' }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
    };

    const addAccount = (provider) => {
        const newAccount = {
            id: Date.now(),
            provider,
            name: 'John Doe',
            email: `john.doe@${provider.toLowerCase()}.com`,
            status: 'Connected'
        };
        setAccounts([...accounts, newAccount]);
        addToast(`${provider} account connected successfully.`);
    };

    const removeAccount = (id) => {
        setAccounts(prev => prev.filter(a => a.id !== id));
        addToast('Account disconnected.');
    }

    return (
        <div className={styles.pageContainer}>
            {/* Sidebar */}
            <Sidebar>
                <Sidebar.SectionHeader icon={<User />}>Account</Sidebar.SectionHeader>
                <Sidebar.Nav>
                    <Sidebar.Item>Profile</Sidebar.Item>
                    <Sidebar.Item>Date and Language</Sidebar.Item>
                </Sidebar.Nav>
                <Sidebar.SectionHeader icon={<LinkIcon weight="fill" />}>Mail</Sidebar.SectionHeader>
                <Sidebar.Nav>
                    <Sidebar.Item isSelected>Connected accounts</Sidebar.Item>
                    <Sidebar.Item>Spam Filters</Sidebar.Item>
                </Sidebar.Nav>
            </Sidebar>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <div className={styles.settingsContainer}>
                    <div className={styles.settingsHeader}>
                        <h1>Connected accounts</h1>
                        <p className={styles.subtitle}>
                            Centralize your email by connecting external accounts. You can read, reply, and manage messages from other providers directly within your Hostopia inbox.
                        </p>
                    </div>

                    {accounts.length === 0 ? (
                        <>
                            <h2 className={styles.sectionLabel}>Choose a platform to get started</h2>
                            <div className={styles.platformGrid}>
                                <PlatformTile
                                    icon={<GoogleLogo weight="fill" />}
                                    label="Google / Gmail"
                                    brandClass={styles.google}
                                    onClick={() => addAccount('Gmail')}
                                />
                                <PlatformTile
                                    icon={<MicrosoftOutlookLogo weight="fill" />}
                                    label="Outlook"
                                    brandClass={styles.outlook}
                                    onClick={() => addAccount('Outlook')}
                                />
                                <PlatformTile
                                    icon={<EnvelopeSimple weight="fill" />}
                                    label="Yahoo"
                                    brandClass={styles.yahoo}
                                    onClick={() => addAccount('Yahoo')}
                                />
                                <PlatformTile
                                    icon={<Cloud weight="fill" />}
                                    label="iCloud"
                                    brandClass={styles.icloud}
                                    onClick={() => addAccount('iCloud')}
                                />
                                <PlatformTile
                                    icon={<EnvelopeSimple weight="fill" />}
                                    label="Other IMAP/POP"
                                    brandClass={styles.other}
                                    onClick={() => addAccount('Other')}
                                />
                            </div>
                        </>
                    ) : (
                        <div className={styles.accountList}>
                            {accounts.map(acc => (
                                <div key={acc.id} className={styles.accountItem}>
                                    <div className={styles.avatar}>
                                        <User />
                                    </div>
                                    <div className={styles.accountInfo}>
                                        <span className={styles.accountName}>{acc.name}</span>
                                        <span className={styles.accountEmail}>{acc.email}</span>
                                    </div>
                                    <div className={styles.status}>
                                        {acc.status}
                                    </div>
                                    <Button variant="icon" onClick={() => removeAccount(acc.id)}>
                                        <Trash />
                                    </Button>
                                </div>
                            ))}
                            {/* Add More Button Area could go here */}
                            <div style={{ padding: '16px' }}>
                                <Button variant="secondary" onClick={() => setAccounts([])}>Connect another account</Button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <ToastContainer toasts={toasts} />
        </div>
    );
};

const PlatformTile = ({ icon, label, brandClass, onClick }) => (
    <button className={styles.platformTile} onClick={onClick}>
        <div className={brandClass}>{icon}</div>
        <span className={styles.tileLabel}>{label}</span>
    </button>
);

export default ConnectedAccounts;
