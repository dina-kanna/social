
import { useMemo, useState } from 'react';

import {
  Search,
  TrendingUp,
  UserPlus,
  Users,
  Sparkles,
  ArrowUpRight,
  Hash,
  X
} from 'lucide-react';

import { people } from '../data';
import Avatar from '../components/Avatar';

const categories = [
  'All',
  'Lifestyle',
  'Photography',
  'Travel',
  'Fashion',
  'Technology'
];

const trendingTopics = [
  { name: 'Creative spaces', posts: '12.8k', category: 'Lifestyle', color: 'from-violet-500 to-purple-700', emoji: '🎨' },
  { name: 'Travel diaries', posts: '9.4k', category: 'Travel', color: 'from-sky-400 to-blue-600', emoji: '✈️' },
  { name: 'Daily inspiration', posts: '8.2k', category: 'Lifestyle', color: 'from-pink-400 to-rose-600', emoji: '✨' },
  { name: 'Street photography', posts: '6.7k', category: 'Photography', color: 'from-orange-400 to-red-500', emoji: '📸' },
  { name: 'Style stories', posts: '5.3k', category: 'Fashion', color: 'from-fuchsia-400 to-purple-600', emoji: '👗' },
  { name: 'Tech discoveries', posts: '4.1k', category: 'Technology', color: 'from-emerald-400 to-teal-600', emoji: '💻' }
];

export default function Explore() {
  const [query, setQuery] = useState('');
  const [following, setFollowing] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('');

  const filteredPeople = useMemo(() => {
    return people.filter((person) =>
      `${person.name} ${person.handle}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  const filteredTopics = trendingTopics.filter((topic) =>
    activeCategory === 'All' || topic.category === activeCategory
  );

  const toggleFollow = (id) => {
    setFollowing((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="mx-auto max-w-[1000px] space-y-8 pb-10">

      {/* Header */}
      <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#5130b9] via-[#8050dc] to-[#c15adf] p-7 text-white md:p-9">

        <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 right-40 h-48 w-48 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-purple-100">
            <Sparkles size={17} />
            DISCOVER SOMETHING NEW
          </div>

          <h1 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
            Find your next
            <br />
            favorite corner.
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-purple-100">
            Discover inspiring creators, explore fresh ideas and connect with people who share your interests.
          </p>
        </div>

        <div className="absolute bottom-5 right-8 hidden text-8xl font-black text-white/10 md:block">
          ✦
        </div>
      </section>

      {/* Search */}
      <section>
        <div className="relative">
          <Search
            size={21}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search creators, usernames..."
            className="w-full rounded-2xl border border-gray-100 bg-white py-4 pl-14 pr-12 text-sm text-ink shadow-sm outline-none transition focus:border-purple-300 focus:ring-4 focus:ring-purple-100"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-ink">
            Explore interests
          </h2>
          <Sparkles size={19} className="text-purple-500" />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedTopic('');
              }}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                  : 'border border-gray-100 bg-white text-gray-500 hover:border-purple-200 hover:text-purple-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-purple-600" />
              <h2 className="text-xl font-extrabold text-ink">
                Trending topics
              </h2>
            </div>
            <p className="mt-1 text-xs text-muted">
              Popular conversations in the community
            </p>
          </div>

          <span className="rounded-full bg-pink-50 px-3 py-1.5 text-xs font-bold text-pink-600">
            Live trends
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTopics.map((topic, index) => (
            <button
              key={topic.name}
              onClick={() => setSelectedTopic(
                selectedTopic === topic.name ? '' : topic.name
              )}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${topic.color} p-5 text-left text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                selectedTopic === topic.name ? 'ring-4 ring-purple-200' : ''
              }`}
            >
              <div className="absolute -right-4 -top-5 text-7xl opacity-20 transition group-hover:scale-125">
                {topic.emoji}
              </div>

              <div className="relative">
                <p className="text-xs font-medium text-white/75">
                  #{index + 1} TRENDING
                </p>

                <h3 className="mt-5 text-lg font-extrabold">
                  {topic.name}
                </h3>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xs text-white/80">
                    {topic.posts} posts
                  </p>
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <p className="rounded-2xl bg-white p-5 text-sm text-muted">
            No trending topics in this category yet.
          </p>
        )}

        {selectedTopic && (
          <div className="mt-3 flex items-center justify-between rounded-xl bg-purple-50 p-3 text-sm text-purple-700">
            <span>
              Selected topic: <strong>{selectedTopic}</strong>
            </span>
            <button onClick={() => setSelectedTopic('')}>
              <X size={17} />
            </button>
          </div>
        )}
      </section>

      {/* Suggested creators */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-purple-600" />
              <h2 className="text-xl font-extrabold text-ink">
                People to discover
              </h2>
            </div>

            <p className="mt-1 text-xs text-muted">
              Meet creators you might like
            </p>
          </div>

          <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-bold text-purple-600">
            {people.length} creators
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filteredPeople.map((person) => {
            const isFollowing = following.includes(person.id);

            return (
              <div
                key={person.id}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full p-0.5 ring-2 ring-purple-100">
                    <Avatar src={person.avatar} size="lg" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-extrabold text-ink">
                      {person.name}
                    </h3>

                    <p className="truncate text-xs text-muted">
                      {person.handle}
                    </p>
                  </div>

                  <span className="text-purple-400">
                    <Sparkles size={17} />
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs text-muted">
                    Suggested creator
                  </span>

                  <button
                    onClick={() => toggleFollow(person.id)}
                    className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition ${
                      isFollowing
                        ? 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                        : 'bg-purple-600 text-white shadow-md shadow-purple-100 hover:bg-purple-700'
                    }`}
                  >
                    {isFollowing ? (
                      'Following'
                    ) : (
                      <>
                        <UserPlus size={15} />
                        Follow
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPeople.length === 0 && (
          <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center">
            <Search className="mx-auto mb-3 text-gray-300" size={32} />
            <h3 className="font-bold text-ink">No creators found</h3>
            <p className="mt-1 text-sm text-muted">
              Try searching with a different name or username.
            </p>
          </div>
        )}
      </section>

      {/* Bottom message */}
      <div className="rounded-2xl bg-purple-50 p-5 text-center">
        <Hash className="mx-auto mb-2 text-purple-600" size={22} />
        <p className="text-sm font-bold text-purple-800">
          Your next connection is just one click away.
        </p>
        <p className="mt-1 text-xs text-purple-500">
          Keep exploring and find your community.
        </p>
      </div>

    </div>
  );
}
