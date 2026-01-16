import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { ConnectedAccounts, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="mail" element={<Navigate to="/settings/connected-accounts" replace />} /> {/* Redirect for demo purposes */}
          <Route path="settings/connected-accounts" element={<ConnectedAccounts />} />

          {/* Placeholders */}
          <Route path="calendar" element={<Home />} />
          <Route path="contacts" element={<Home />} />
          <Route path="tasks" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
