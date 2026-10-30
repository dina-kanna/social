
import { useState } from 'react';

import Stories from '../components/Stories';
import PostCard from '../components/PostCard';
import { initialPosts } from '../data';

function PhotoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function Home({ onCreate }) {
  const [posts, setPosts] = useState(initialPosts);
  const [activeTab, setActiveTab] = useState('For you');

  const tabs = ['For you', 'Following', 'Popular'];

  const like = (id) => {
    setPosts((items) =>
      items.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.likes + (post.liked ? -1 : 1),
            }
          : post
      )
    );
  };

  return (
    <div className="mx-auto max-w-[720px] space-y-7 pb-10">

      {/* Welcome section */}
      <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#6d42dc] via-[#8655e9] to-[#b45ce8] p-6 text-white shadow-xl shadow-purple-200/50 md:p-8">

        <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-pink-300/20 blur-2xl" />

        <div className="relative z-10">
          <p className="text-sm font-medium text-purple-100">
            YOUR SOCIAL SPACE
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            Make every moment
            <br />
            <span className="text-purple-200">worth sharing.</span>
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-purple-100">
            Catch up with friends, discover new stories and share what's happening in your world.
          </p>

          <button
            onClick={onCreate}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <PlusIcon />
            Create a post
          </button>
        </div>

        <div className="absolute bottom-5 right-7 hidden text-7xl font-black text-white/10 md:block">
          S.
        </div>
      </section>

      {/* Stories */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-ink">
              Stories
            </h2>
            <p className="text-xs text-muted">
              See what's happening today
            </p>
          </div>

          <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-bold text-brand">
            View all
          </span>
        </div>

        <Stories />
      </section>

      {/* Create post card */}
      <section className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md">

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100?img=5"
            alt="Your profile"
            className="h-12 w-12 rounded-full border-2 border-purple-100 object-cover"
          />

          <button
            onClick={onCreate}
            className="flex-1 rounded-2xl bg-[#f7f6fb] px-5 py-3.5 text-left text-sm text-gray-400 transition hover:bg-purple-50"
          >
            What's on your mind?
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">

          <div className="flex flex-wrap gap-2">
            <button
              onClick={onCreate}
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-emerald-600 transition hover:bg-emerald-50"
            >
              <PhotoIcon />
              Photo / Video
            </button>

            <button
              onClick={onCreate}
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-amber-600 transition hover:bg-amber-50"
            >
              <SmileIcon />
              Feeling
            </button>
          </div>

          <button
            onClick={onCreate}
            className="rounded-xl bg-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-purple-200 transition hover:bg-purple-700"
          >
            Share now
          </button>
        </div>
      </section>

      {/* Feed navigation */}
      <section>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-ink">
              Explore your feed
            </h2>
            <p className="mt-1 text-xs text-muted">
              Updates from your community
            </p>
          </div>

          <button className="rounded-xl border border-gray-100 bg-white px-3 py-2 text-xs font-semibold text-muted hover:bg-purple-50">
            Latest ↓
          </button>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition ${
                activeTab === tab
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                  : 'bg-white text-gray-500 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Posts */}
      <div className="space-y-5">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={like}
          />
        ))}
      </div>

      {/* End of feed */}
      <div className="py-5 text-center">
        <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-purple-100 p-2.5 text-purple-600">
          <SmileIcon />
        </div>

        <p className="text-sm font-bold text-ink">
          You're all caught up!
        </p>

        <p className="mt-1 text-xs text-muted">
          Come back later for more moments.
        </p>
      </div>

    </div>
  );
}
