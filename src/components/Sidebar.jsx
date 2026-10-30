
import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/explore', label: 'Explore', icon: 'compass' },
  { to: '/notifications', label: 'Notifications', icon: 'bell', badge: '3' },
  { to: '/messages', label: 'Messages', icon: 'message' },
  { to: '/profile', label: 'My Profile', icon: 'user' },
];

const icons = {
  home: (
    <>
      <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.2 7.8-2.8 5.6-5.6 2.8 2.8-5.6z" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  message: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8z" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a8 8 0 0 0 0-6l1.5-1.2-1.8-3.1-1.8.7a8 8 0 0 0-5.3-1.5l-.4-1.9h-3.6l-.4 1.9a8 8 0 0 0-2.3 1.3l-1.8-.7-1.8 3.1L3.2 9a8 8 0 0 0 0 6l-1.5 1.2 1.8 3.1 1.8-.7a8 8 0 0 0 5.3 1.5l.4 1.9h3.6l.4-1.9a8 8 0 0 0 2.3-1.3l1.8.7 1.8-3.1z" />
    </>
  ),
  logout: (
    <>
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" />
    </>
  ),
  close: <path d="m18 6-12 12M6 6l12 12" />,
  sparkle: (
    <>
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
      <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" />
    </>
  ),
};

function Icon({ name, size = 21 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

export default function Sidebar({ open, close }) {
  const location = useLocation();

  const handleLogout = () => {
    // Connect your logout/authentication logic here.
    console.log('Logout clicked');
  };

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <button
          aria-label="Close menu"
          onClick={close}
          className="fixed inset-0 z-40 bg-gray-950/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-[275px] flex-col
          overflow-y-auto
          border-r border-purple-100/70
          bg-white px-5 py-6
          shadow-2xl shadow-purple-100/40
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:sticky lg:top-0 lg:z-20
          lg:h-screen lg:translate-x-0 lg:shadow-none
        `}
      >

        {/* Logo */}
        <div className="mb-9 flex items-center justify-between px-2">
          <NavLink
            to="/"
            onClick={close}
            className="group flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-pink-500 text-white shadow-lg shadow-purple-200 transition-transform group-hover:rotate-6">
              <Icon name="sparkle" size={23} />
            </div>

            <span className="text-[25px] font-black tracking-tight text-ink">
              socially<span className="text-violet-600">.</span>
            </span>
          </NavLink>

          <button
            onClick={close}
            aria-label="Close menu"
            className="rounded-xl p-1 text-gray-400 transition hover:bg-gray-100 lg:hidden"
          >
            <Icon name="close" size={19} />
          </button>
        </div>

        {/* Welcome card */}
        <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 p-4 text-white shadow-lg shadow-purple-200/60">
      <div className="flex items-center justify-center gap-2">
  <Icon name="sparkle" size={17} />
  <span className="text-xs font-bold tracking-wide leading-none">
    YOUR SOCIAL SPACE
  </span>
</div>

          <p className="mt-3 text-lg font-extrabold">
            Stay connected.
          </p>

          <p className="mt-1 text-xs leading-5 text-purple-100">
            Share moments and discover amazing people.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <p className="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[2px] text-gray-400">
            Main menu
          </p>

          <div className="space-y-2">
            {links.map(({ to, label, icon, badge }) => {
              const isActive =
                to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(to);

              return (
                <NavLink
                  key={to}
                  to={to}
                  onClick={close}
                  className={`
                    group relative flex items-center gap-4
                    rounded-2xl px-4 py-3.5
                    text-sm font-bold
                    transition-all duration-200
                    ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-md shadow-purple-200'
                        : 'text-gray-500 hover:bg-purple-50 hover:text-purple-700'
                    }
                  `}
                >
                  <span className={`transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? 'text-white' : ''
                  }`}>
                    <Icon name={icon} />
                  </span>

                  <span className="flex-1">
                    {label}
                  </span>

                  {badge && (
                    <span className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-extrabold ${
                      isActive
                        ? 'bg-white text-purple-700'
                        : 'bg-pink-500 text-white'
                    }`}>
                      {badge}
                    </span>
                  )}

                  {isActive && (
                    <span className="absolute right-2 h-1.5 w-1.5 rounded-full bg-white/80" />
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-100 pt-5">

          <p className="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[2px] text-gray-400">
            Preferences
          </p>

          <button
            className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-sm font-semibold text-gray-500 transition hover:bg-purple-50 hover:text-purple-700"
          >
            <Icon name="settings" size={20} />
            Settings
          </button>

          <button
            onClick={handleLogout}
            className="mt-1 flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-sm font-semibold text-gray-500 transition hover:bg-red-50 hover:text-red-500"
          >
            <Icon name="logout" size={20} />
            Log out
          </button>

          {/* Profile mini card */}
          <NavLink
            to="/profile"
            onClick={close}
            className="mt-5 flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-3 transition hover:border-purple-200 hover:bg-purple-50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-sm font-extrabold text-white">
             D
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-extrabold text-ink">
                My Account
              </p>
              <p className="mt-1 text-[10px] text-gray-400">
                View your profile
              </p>
            </div>

            <span className="text-gray-400">›</span>
          </NavLink>

          <p className="mt-5 text-center text-[10px] font-medium text-gray-300">
            © 2026 Socially. Made with love.
          </p>
        </div>
      </aside>
    </>
  );
}
