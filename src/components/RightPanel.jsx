
import { useState } from 'react';
import {
  TrendingUp,
  Plus,
  Check,
  Flame,
  Hash,
  Sparkles,
  ArrowUpRight,
  Users
} from 'lucide-react';

import { people } from '../data';
import Avatar from './Avatar';

const topics = [
  { tag: '#DesignInspiration', posts: '12.8k', growth: '+24%', color: 'from-violet-500 to-purple-600' },
  { tag: '#WeekendVibes', posts: '9.6k', growth: '+18%', color: 'from-pink-500 to-rose-500' },
  { tag: '#CreativeCommunity', posts: '8.2k', growth: '+15%', color: 'from-blue-500 to-cyan-500' },
  { tag: '#TravelDiaries', posts: '6.4k', growth: '+12%', color: 'from-orange-400 to-amber-500' },
  { tag: '#DailyInspiration', posts: '5.1k', growth: '+9%', color: 'from-emerald-500 to-teal-500' }
];

export default function RightPanel() {
  const [following, setFollowing] = useState([]);

  const toggleFollow = (id) => {
    setFollowing((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <aside className="hidden w-[310px] shrink-0 space-y-5 xl:block">

      {/* Suggested people */}
      <section className="overflow-hidden rounded-3xl border border-purple-100/70 bg-white shadow-sm">

        <div className="flex items-center justify-between bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-4 text-white">
          <div>
            <h3 className="font-extrabold">People you may know</h3>
            <p className="mt-1 text-[11px] text-purple-100">
              Discover new connections
            </p>
          </div>

          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
            <Users size={19} />
          </span>
        </div>

        <div className="space-y-4 p-5">
          {people.slice(0, 5).map((person) => {
            const isFollowing = following.includes(person.id);

            return (
              <div
                key={person.id}
                className="group flex items-center gap-3"
              >
                <div className="rounded-full bg-gradient-to-tr from-violet-500 to-pink-400 p-[2px]">
                  <div className="rounded-full bg-white p-[2px]">
                    <Avatar src={person.avatar} size="sm" />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-gray-800 transition group-hover:text-violet-600">
                    {person.name}
                    {person.verified && (
                      <span className="ml-1 inline-flex text-blue-500">✓</span>
                    )}
                  </p>

                  <p className="truncate text-[11px] text-gray-400">
                    {person.handle}
                  </p>
                </div>

                <button
                  onClick={() => toggleFollow(person.id)}
                  aria-label={isFollowing ? `Unfollow ${person.name}` : `Follow ${person.name}`}
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition ${
                    isFollowing
                      ? 'bg-green-50 text-green-600'
                      : 'bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white'
                  }`}
                >
                  {isFollowing ? <Check size={16} /> : <Plus size={17} />}
                </button>
              </div>
            );
          })}
        </div>

        <button className="w-full border-t border-gray-100 py-3.5 text-xs font-extrabold text-violet-600 transition hover:bg-violet-50">
          Discover more people →
        </button>
      </section>

      {/* Trending topics */}
      <section className="rounded-3xl border border-purple-100/70 bg-white p-5 shadow-sm">

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-gray-900">
              Trending now
            </h3>
            <p className="mt-1 text-[11px] text-gray-400">
              Popular in your community
            </p>
          </div>

          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
            <Flame size={19} />
          </span>
        </div>

        <div className="space-y-4">
          {topics.map((topic, index) => (
            <button
              key={topic.tag}
              className="group flex w-full items-center gap-3 text-left"
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${topic.color} text-white shadow-sm`}>
                <Hash size={17} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold text-gray-800 transition group-hover:text-violet-600">
                  {topic.tag}
                </span>

                <span className="mt-1 block text-[10px] text-gray-400">
                  {topic.posts} posts
                </span>
              </span>

              <span className="flex items-center gap-0.5 text-[10px] font-bold text-green-500">
                <ArrowUpRight size={13} />
                {topic.growth}
              </span>
            </button>
          ))}
        </div>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-50 py-3 text-xs font-bold text-violet-600 transition hover:bg-violet-100">
          <TrendingUp size={15} />
          Explore trending topics
        </button>
      </section>

      {/* Community highlight */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-500 p-5 text-white shadow-lg shadow-purple-200/60">
        <div className="absolute -right-7 -top-7 h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute -bottom-10 -left-5 h-28 w-28 rounded-full bg-white/10" />

        <div className="relative">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
            <Sparkles size={21} />
          </span>

          <h3 className="mt-4 text-lg font-extrabold">
            Make new connections!
          </h3>

          <p className="mt-2 text-xs leading-5 text-purple-100">
            Share your moments, discover creators and grow your community.
          </p>

          <button className="mt-4 rounded-xl bg-white px-4 py-2.5 text-xs font-extrabold text-violet-700 transition hover:bg-purple-50">
            Explore community
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-2 pb-4">
        <div className="flex flex-wrap gap-x-3 gap-y-2 text-[10px] font-medium text-gray-400">
          <a href="#" className="hover:text-violet-600">About</a>
          <a href="#" className="hover:text-violet-600">Help</a>
          <a href="#" className="hover:text-violet-600">Privacy</a>
          <a href="#" className="hover:text-violet-600">Terms</a>
          <a href="#" className="hover:text-violet-600">Contact</a>
        </div>

        <p className="mt-3 text-[10px] text-gray-300">
          © 2026 Socially · Made with ♥
        </p>
      </footer>

    </aside>
  );
}
