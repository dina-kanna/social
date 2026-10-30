
import { useState } from 'react';

import {
  Heart,
  MessageCircle,
  UserPlus,
  AtSign,
  Bell,
  CheckCheck,
  Sparkles,
  MoreHorizontal
} from 'lucide-react';

import Avatar from '../components/Avatar';

const initialNotifications = [
  {
    id: 1,
    name: 'Maya Chen',
    action: 'liked your photo',
    time: '12 min ago',
    avatar: 'https://i.pravatar.cc/100?img=47',
    Icon: Heart,
    color: 'bg-pink-100 text-pink-600',
    type: 'Likes',
    unread: true
  },
  {
    id: 2,
    name: 'Jordan Lee',
    action: 'started following you',
    time: '1 hour ago',
    avatar: 'https://i.pravatar.cc/100?img=12',
    Icon: UserPlus,
    color: 'bg-blue-100 text-blue-600',
    type: 'Follows',
    unread: true
  },
  {
    id: 3,
    name: 'Aisha Patel',
    action: 'commented: “This is beautiful!”',
    time: '3 hours ago',
    avatar: 'https://i.pravatar.cc/100?img=44',
    Icon: MessageCircle,
    color: 'bg-purple-100 text-purple-600',
    type: 'Comments',
    unread: true
  },
  {
    id: 4,
    name: 'Noah Williams',
    action: 'mentioned you in a post',
    time: 'Yesterday',
    avatar: 'https://i.pravatar.cc/100?img=14',
    Icon: AtSign,
    color: 'bg-amber-100 text-amber-600',
    type: 'Comments',
    unread: false
  },
  {
    id: 5,
    name: 'Olivia Smith',
    action: 'liked your latest post',
    time: 'Yesterday',
    avatar: 'https://i.pravatar.cc/100?img=49',
    Icon: Heart,
    color: 'bg-pink-100 text-pink-600',
    type: 'Likes',
    unread: true
  },
  {
    id: 6,
    name: 'Ethan Carter',
    action: 'started following you',
    time: 'Yesterday',
    avatar: 'https://i.pravatar.cc/100?img=11',
    Icon: UserPlus,
    color: 'bg-blue-100 text-blue-600',
    type: 'Follows',
    unread: false
  },
  {
    id: 7,
    name: 'Sophia Garcia',
    action: 'commented: “Amazing photography!”',
    time: '2 days ago',
    avatar: 'https://i.pravatar.cc/100?img=45',
    Icon: MessageCircle,
    color: 'bg-purple-100 text-purple-600',
    type: 'Comments',
    unread: true
  },
  {
    id: 8,
    name: 'Liam Anderson',
    action: 'liked your profile picture',
    time: '2 days ago',
    avatar: 'https://i.pravatar.cc/100?img=13',
    Icon: Heart,
    color: 'bg-pink-100 text-pink-600',
    type: 'Likes',
    unread: false
  },
  {
    id: 9,
    name: 'Emma Wilson',
    action: 'mentioned you in a comment',
    time: '3 days ago',
    avatar: 'https://i.pravatar.cc/100?img=48',
    Icon: AtSign,
    color: 'bg-amber-100 text-amber-600',
    type: 'Comments',
    unread: true
  },
  {
    id: 10,
    name: 'Arjun Kumar',
    action: 'started following you',
    time: '3 days ago',
    avatar: 'https://i.pravatar.cc/100?img=68',
    Icon: UserPlus,
    color: 'bg-blue-100 text-blue-600',
    type: 'Follows',
    unread: false
  },
  {
    id: 11,
    name: 'Isabella Brown',
    action: 'liked your travel post',
    time: '4 days ago',
    avatar: 'https://i.pravatar.cc/100?img=46',
    Icon: Heart,
    color: 'bg-pink-100 text-pink-600',
    type: 'Likes',
    unread: false
  },
  {
    id: 12,
    name: 'Daniel Martin',
    action: 'commented: “Love this! Keep sharing.”',
    time: '5 days ago',
    avatar: 'https://i.pravatar.cc/100?img=15',
    Icon: MessageCircle,
    color: 'bg-purple-100 text-purple-600',
    type: 'Comments',
    unread: false
  }
];

const filters = ['All', 'Likes', 'Comments', 'Follows'];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeFilter, setActiveFilter] = useState('All');

  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length;

  const visibleNotifications = notifications.filter(
    (item) =>
      activeFilter === 'All' || item.type === activeFilter
  );

  const markAllRead = () => {
    setNotifications((items) =>
      items.map((item) => ({ ...item, unread: false }))
    );
  };

  const markRead = (id) => {
    setNotifications((items) =>
      items.map((item) =>
        item.id === id ? { ...item, unread: false } : item
      )
    );
  };

  return (
    <div className="mx-auto max-w-[850px] space-y-6 pb-10">

      {/* Header */}
      <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#5531b9] via-[#8651dc] to-[#c05bdf] p-7 text-white md:p-9">
        <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-100">
              <Sparkles size={17} />
              YOUR ACTIVITY
            </div>

            <h1 className="mt-3 text-3xl font-black md:text-4xl">
              Notifications
            </h1>

            <p className="mt-2 text-sm text-purple-100">
              All your latest updates in one place.
            </p>
          </div>

          <div className="hidden h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm sm:flex">
            <Bell size={38} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold text-muted">
            TOTAL ACTIVITY
          </p>
          <h2 className="mt-2 text-3xl font-black text-ink">
            {notifications.length}
          </h2>
          <p className="mt-1 text-xs text-muted">
            Recent notifications
          </p>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
          <p className="text-xs font-semibold text-purple-600">
            UNREAD UPDATES
          </p>
          <h2 className="mt-2 text-3xl font-black text-purple-700">
            {unreadCount}
          </h2>
          <p className="mt-1 text-xs text-purple-500">
            Waiting for your attention
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="font-extrabold text-ink">
              Recent activity
            </h2>
            <p className="mt-1 text-xs text-muted">
              Keep up with your community
            </p>
          </div>

          <button
            onClick={markAllRead}
            disabled={unreadCount === 0}
            className="flex items-center gap-2 rounded-xl bg-purple-50 px-3 py-2 text-xs font-bold text-purple-700 transition hover:bg-purple-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <CheckCheck size={15} />
            <span className="hidden sm:inline">Mark all read</span>
            <span className="sm:hidden">Read all</span>
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition ${
                activeFilter === filter
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                  : 'bg-gray-50 text-gray-500 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Notification list */}
      <section className="space-y-3">
        {visibleNotifications.map((item) => {
          const Icon = item.Icon;

          return (
            <article
              key={item.id}
              onClick={() => markRead(item.id)}
              className={`group flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:gap-4 ${
                item.unread
                  ? 'border-purple-100 bg-purple-50/60'
                  : 'border-gray-100 bg-white'
              }`}
            >
              <div className="relative shrink-0">
                <Avatar
                  src={item.avatar}
                  name={item.name}
                  size="lg"
                />

                <span className={`absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white ${item.color}`}>
                  <Icon size={13} />
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm leading-6 text-ink">
                  <strong>{item.name}</strong>{' '}
                  {item.action}
                </p>

                <p className="mt-1 text-xs font-medium text-muted">
                  {item.time}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {item.unread && (
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-600" />
                )}

                <button
                  aria-label={`More options for ${item.name}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    markRead(item.id);
                  }}
                  className="rounded-lg p-2 text-gray-400 opacity-100 transition hover:bg-white hover:text-purple-600 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <MoreHorizontal size={19} />
                </button>
              </div>
            </article>
          );
        })}

        {visibleNotifications.length === 0 && (
          <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center">
            <Bell size={34} className="mx-auto mb-3 text-purple-300" />

            <h3 className="font-bold text-ink">
              No notifications here
            </h3>

            <p className="mt-1 text-sm text-muted">
              Try another category to see your activity.
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <div className="py-5 text-center">
        <p className="text-xs font-medium text-muted">
          <CheckCheck size={15} className="mr-1 inline text-purple-500" />
          You're up to date with your community.
        </p>
      </div>
    </div>
  );
}
