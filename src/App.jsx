
import { useCallback, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoadingScreen from './components/LoadingScreen';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import RightPanel from './components/RightPanel';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Auth from './pages/Auth';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [creating, setCreating] = useState(false);

  // Automatically hide loading screen after 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const handleCreate = () => {
    setCreating(true);
  };

  if (!loggedIn) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <>
      {loading && <LoadingScreen />}

      <div className="min-h-screen bg-[#f7f7fb] text-ink lg:flex">

        <Sidebar
          open={menuOpen}
          close={() => setMenuOpen(false)}
        />

        <main className="min-w-0 flex-1">

          <Topbar
            onMenu={() => setMenuOpen(true)}
            onCreate={handleCreate}
          />

          <div className="flex gap-8 p-4 md:p-7">

            <div className="min-w-0 flex-1">
              <Routes>
                <Route
                  path="/"
                  element={<Home onCreate={handleCreate} />}
                />

                <Route path="/profile" element={<Profile />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />

                <Route
                  path="*"
                  element={<Navigate to="/" replace />}
                />
              </Routes>
            </div>

            <RightPanel />

          </div>
        </main>
      </div>

      {creating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">

            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Create a post</h2>

              <button
                onClick={() => setCreating(false)}
                aria-label="Close"
                className="text-muted"
              >
                ✕
              </button>
            </div>

            <textarea
              rows={5}
              placeholder="Share something with your community..."
              className="w-full resize-none rounded-xl border border-gray-200 p-4 text-sm outline-none focus:border-brand"
            />

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setCreating(false)}
                className="rounded-xl px-4 py-2 text-sm text-muted"
              >
                Cancel
              </button>

              <button
                onClick={() => setCreating(false)}
                className="rounded-xl bg-brand px-5 py-2 text-sm font-bold text-white"
              >
                Publish
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
