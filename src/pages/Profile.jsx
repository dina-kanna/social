
import { useState } from 'react';

import {
  Grid3X3,
  Camera,
  Edit3,
  Heart,
  MessageCircle,
  MapPin,
  CalendarDays,
  Link as LinkIcon,
  X,
  Sparkles
} from 'lucide-react';

import Avatar from '../components/Avatar';

const tiles = [
  'photo-1493246507139-91e8fad9978e',
  'photo-1518837695005-2083093ee35b',
  'photo-1470252649378-9c29740c9fa8',
  'photo-1500530855697-b586d89ba3ee',
  'photo-1470770841072-f978cf4d019e',
  'photo-1519608487953-e999c86e7455'
];

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('Posts');

  const [name, setName] = useState('Dinesh');

  const [bio, setBio] = useState(
    'Creative soul ✨ Sharing moments, ideas, and everyday adventures. Based in the city.'
  );

  const [location, setLocation] = useState('New York, USA');

  const [website, setWebsite] = useState('www.dina3.com');

  return (
    <div className="mx-auto max-w-[950px] space-y-6 pb-10">

      {/* Profile cover */}
      <section className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">

        <div className="relative h-44 overflow-hidden bg-gradient-to-r from-violet-600 via-purple-500 to-pink-400 sm:h-56">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-28 left-20 h-64 w-64 rounded-full bg-pink-300/20 blur-2xl" />

          <div className="absolute right-6 top-6 rounded-full bg-white/15 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
            <Sparkles size={14} className="mr-1 inline" />
            CREATOR PROFILE
          </div>
        </div>

        <div className="px-5 pb-7 sm:px-8">

          {/* Avatar and edit */}
          <div className="-mt-16 flex flex-col items-center justify-between gap-4 sm:-mt-20 sm:flex-row">

            <div className="relative">
              <div className="rounded-full border-[6px] border-white bg-white shadow-xl">
                <Avatar
              src="https://i.pravatar.cc/120?img=12"
                  size="xl"
                  ring
                />
              </div>

              <button
                aria-label="Change profile picture"
                onClick={() => setEditing(true)}
                className="absolute bottom-1 right-1 rounded-full bg-purple-600 p-2.5 text-white shadow-lg transition hover:scale-110"
              >
                <Camera size={16} />
              </button>
            </div>

            <button
              onClick={() => setEditing(true)}
              className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-purple-700"
            >
              <Edit3 size={16} />
              Edit profile
            </button>
          </div>

          {/* Profile details */}
          <div className="mt-5">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-black text-ink">
                {name}
              </h1>

              <span className="rounded-full bg-purple-100 px-3 py-1 text-[10px] font-bold text-purple-700">
                CREATOR
              </span>
            </div>

            <p className="mt-1 text-sm font-medium text-purple-600">
              @dina45
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500">
              {bio}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-muted">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} />
                {location}
              </span>

              <span className="flex items-center gap-1.5">
                <LinkIcon size={15} />
                {website}
              </span>

              <span className="flex items-center gap-1.5">
                <CalendarDays size={15} />
                Joined March 2024
              </span>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-7 grid grid-cols-3 divide-x divide-gray-100 rounded-2xl bg-[#faf9ff] py-5 text-center">

            <div>
              <p className="text-2xl font-black text-ink">48</p>
              <p className="mt-1 text-xs font-medium text-muted">Posts</p>
            </div>

            <div>
              <p className="text-2xl font-black text-ink">12.6k</p>
              <p className="mt-1 text-xs font-medium text-muted">Followers</p>
            </div>

            <div>
              <p className="text-2xl font-black text-ink">842</p>
              <p className="mt-1 text-xs font-medium text-muted">Following</p>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery heading */}
      <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-ink">
              My collection
            </h2>
            <p className="mt-1 text-xs text-muted">
              Moments captured and memories shared
            </p>
          </div>

          <span className="rounded-xl bg-purple-50 p-3 text-purple-600">
            <Grid3X3 size={20} />
          </span>
        </div>

        <div className="mt-5 flex gap-6 border-b border-gray-100">
          {['Posts', 'Saved'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 border-b-2 pb-3 text-sm font-bold transition ${
                activeTab === tab
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-400 hover:text-purple-600'
              }`}
            >
              {tab === 'Posts' ? <Grid3X3 size={16} /> : <Heart size={16} />}
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Image gallery */}
      {activeTab === 'Posts' ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {tiles.map((image, index) => (
            <div
              key={image}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-sm"
            >
              <img
                src={`https://images.unsplash.com/${image}?w=600&q=85`}
                alt={`Profile post ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center gap-5 bg-black/0 text-sm font-bold text-white opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100">
                <span className="flex items-center gap-1">
                  <Heart size={18} fill="white" />
                  {120 + index * 34}
                </span>

                <span className="flex items-center gap-1">
                  <MessageCircle size={18} />
                  {12 + index * 3}
                </span>
              </div>

              <span className="absolute right-3 top-3 rounded-lg bg-black/30 p-2 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                <Grid3X3 size={15} />
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center">
          <Heart size={35} className="mx-auto mb-3 text-purple-300" />
          <h3 className="font-bold text-ink">Your saved moments</h3>
          <p className="mt-1 text-sm text-muted">
            Your saved posts will appear here.
          </p>
        </div>
      )}

      {/* Edit modal */}
      {editing && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setEditing(false)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-[26px] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-white">
              <div>
                <h2 className="text-xl font-extrabold">
                  Edit your profile
                </h2>
                <p className="mt-1 text-xs text-purple-100">
                  Make your profile yours.
                </p>
              </div>

              <button
                onClick={() => setEditing(false)}
                aria-label="Close edit profile"
                className="rounded-full bg-white/15 p-2 hover:bg-white/25"
              >
                <X size={19} />
              </button>
            </div>

            <div className="space-y-4 p-6">

              <div>
                <label className="mb-2 block text-xs font-bold text-gray-500">
                  DISPLAY NAME
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-gray-500">
                  BIO
                </label>

                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={3}
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-gray-500">
                  LOCATION
                </label>

                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-gray-500">
                  WEBSITE
                </label>

                <input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              <button
                onClick={() => setEditing(false)}
                className="w-full rounded-xl bg-purple-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700"
              >
                Save changes
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
