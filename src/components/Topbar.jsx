
import { useNavigate } from 'react-router-dom';

function Icon({ name, size = 20, className = '' }) {
  const paths = {
    menu: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    chevron: <path d="m7 10 5 5 5-5" />,
    sparkle: (
      <>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
        <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" />
      </>
    )
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function Topbar({ onMenu, onCreate }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-gray-100/80 bg-white/95 px-3 backdrop-blur-xl sm:px-5 md:px-8">

      {/* Left section */}
      <div className="flex min-w-0 items-center gap-2 sm:gap-4">

        {/* Mobile menu */}
        <button
          onClick={onMenu}
          aria-label="Open menu"
          className="shrink-0 rounded-xl p-2 text-gray-700 transition hover:bg-violet-50 hover:text-violet-600 lg:hidden"
        >
          <Icon name="menu" size={23} />
        </button>

        {/* Logo and app name - mobile and tablet */}
        <button
          onClick={() => navigate('/')}
          className="flex shrink-0 items-center gap-2 lg:hidden"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 text-white shadow-md shadow-purple-200">
            <Icon name="sparkle" size={21} />
          </span>

          <span className="text-xl font-black tracking-tight text-transparent bg-gradient-to-r from-violet-700 to-pink-500 bg-clip-text sm:text-2xl">
            socially
          </span>
        </button>

        {/* Search - desktop */}
        <div className="relative hidden lg:block">
          <Icon
            name="search"
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search people, posts..."
            className="w-64 rounded-2xl border border-gray-100 bg-[#f8f7fc] py-3 pl-11 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100 xl:w-80"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-3 md:gap-5">

        {/* Notification */}
        <button
          aria-label="Notifications"
          onClick={() => navigate('/notifications')}
          className="relative rounded-xl p-2 text-gray-500 transition hover:bg-violet-50 hover:text-violet-600 sm:p-2.5"
        >
          <Icon name="bell" size={21} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-white bg-pink-500 sm:right-2 sm:top-2" />
        </button>

        {/* Create post */}
        <button
          onClick={onCreate}
          className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-2.5 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-200/70 transition hover:-translate-y-0.5 hover:shadow-purple-300 sm:gap-2 sm:px-4 sm:text-sm"
        >
          <Icon name="plus" size={18} />
          <span className="hidden sm:inline">Create post</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => navigate('/profile')}
          aria-label="Open my profile"
          className="group flex shrink-0 items-center gap-2 rounded-full p-1 transition hover:bg-violet-50"
        >
          <span className="relative block rounded-full bg-gradient-to-tr from-violet-600 via-purple-500 to-pink-400 p-[2px]">
            <img
              src="https://i.pravatar.cc/120?img=12"
              alt="My profile"
              className="h-9 w-9 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"
            />

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
          </span>

          <span className="hidden text-left md:block">
            <span className="block text-xs font-extrabold text-gray-800">
              Dinesh
            </span>
            <span className="block text-[10px] font-medium text-gray-400">
              Online
            </span>
          </span>

          <Icon
            name="chevron"
            size={15}
            className="hidden text-gray-400 md:block"
          />
        </button>
      </div>
    </header>
  );
}
