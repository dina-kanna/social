
import { Plus, Play } from 'lucide-react';
import { stories } from '../data';

export default function Stories() {
  return (
    <section className="overflow-hidden rounded-3xl border border-purple-100/70 bg-white p-4 shadow-sm sm:p-5">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-extrabold tracking-tight text-gray-900">
            Stories
          </h2>
          <p className="mt-0.5 text-xs text-gray-400">
            See what your friends are sharing
          </p>
        </div>

        <button className="rounded-full bg-purple-50 px-4 py-2 text-xs font-bold text-violet-600 transition hover:bg-violet-100">
          See all
        </button>
      </div>

      {/* Stories list */}
      <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

        {/* Add your story */}
        <button className="group flex min-w-[68px] flex-col items-center gap-2">
          <span className="relative flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-dashed border-violet-300 bg-violet-50 transition duration-300 group-hover:scale-105 group-hover:border-violet-500">
            <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-500 text-white shadow-md shadow-purple-200">
              <Plus size={27} strokeWidth={2.5} />
            </span>
          </span>

          <span className="text-xs font-semibold text-violet-600">
            Your story
          </span>
        </button>

        {/* Friends' stories */}
        {stories.filter((story) => !story.own).map((story, index) => (
          <button
            key={story.name}
            className="group flex min-w-[68px] flex-col items-center gap-2"
          >
            <span className="relative rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-violet-600 p-[3px] transition duration-300 group-hover:scale-105 group-hover:rotate-3">
              <span className="block rounded-full bg-white p-[3px]">
                <img
                  src={story.avatar}
                  alt={`${story.name}'s story`}
                  className="h-[58px] w-[58px] rounded-full object-cover"
                />
              </span>

              {/* Story play indicator */}
              <span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-violet-600 text-white">
                <Play size={9} fill="currentColor" />
              </span>
            </span>

            <span className="max-w-[72px] truncate text-xs font-semibold text-gray-600 transition group-hover:text-violet-600">
              {story.name}
            </span>
          </button>
        ))}

      </div>

      {/* Bottom caption */}
      <div className="mt-2 flex items-center gap-2 border-t border-gray-100 pt-3">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <p className="text-[11px] font-medium text-gray-400">
          New moments from your community
        </p>
      </div>

    </section>
  );
}
