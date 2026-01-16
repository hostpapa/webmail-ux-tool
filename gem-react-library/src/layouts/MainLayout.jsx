import { Outlet, NavLink } from 'react-router-dom';
import {
    EnvelopeSimple, Calendar, Users, CheckSquare, UserCircle
} from '@phosphor-icons/react';
import { TopNavAlt } from '../components';
import styles from '../components/TopNav/TopNavAlt.module.css'; // Access styles directly for NavLink

const MainLayout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <TopNavAlt>
                <TopNavAlt.Logo href="/">Webmail</TopNavAlt.Logo>
                <TopNavAlt.Search placeholder="Search mail, contacts, events..." />
                <TopNavAlt.Actions>
                    {/* Using NavLink with the style class from TopNavAlt module */}
                    <NavLink
                        to="/mail"
                        title="Mail"
                        className={({ isActive }) => `${styles.linkAlt} ${isActive ? styles.linkAltActive : ''}`}
                        style={({ isActive }) => isActive ? { color: 'var(--color-brand-secondary)' } : {}}
                    >
                        <EnvelopeSimple weight="fill" />
                    </NavLink>

                    <NavLink
                        to="/calendar"
                        title="Calendar"
                        className={({ isActive }) => `${styles.linkAlt} ${isActive ? styles.linkAltActive : ''}`}
                        style={({ isActive }) => isActive ? { color: 'var(--color-brand-secondary)' } : {}}
                    >
                        <Calendar />
                    </NavLink>

                    <NavLink
                        to="/contacts"
                        title="Contacts"
                        className={({ isActive }) => `${styles.linkAlt} ${isActive ? styles.linkAltActive : ''}`}
                        style={({ isActive }) => isActive ? { color: 'var(--color-brand-secondary)' } : {}}
                    >
                        <Users />
                    </NavLink>

                    <NavLink
                        to="/tasks"
                        title="Tasks"
                        className={({ isActive }) => `${styles.linkAlt} ${isActive ? styles.linkAltActive : ''}`}
                        style={({ isActive }) => isActive ? { color: 'var(--color-brand-secondary)' } : {}}
                    >
                        <CheckSquare />
                    </NavLink>

                    <TopNavAlt.Separator />
                    <TopNavAlt.Profile icon={<UserCircle style={{ fontSize: '28px' }} />} />
                </TopNavAlt.Actions>
            </TopNavAlt>

            {/* Page Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
