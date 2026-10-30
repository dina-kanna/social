
import { useState } from 'react';

import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Share2,
  Smile,
  CheckCircle2,
  X
} from 'lucide-react';

import Avatar from './Avatar';

export default function PostCard({ post, onLike }) {
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [commentsList, setCommentsList] = useState([]);

  const handleComment = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    setCommentsList((current) => [
      ...current,
      {
        id: Date.now(),
        text: comment.trim()
      }
    ]);

    setComment('');
  };

  const handleShare = async () => {
    const shareData = {
      title: `Post by ${post.user.name}`,
      text: post.text || 'Check out this post on Socially!'
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.text);
      }
    } catch {
      // Sharing was cancelled or unavailable.
    }
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:shadow-xl hover:shadow-purple-100/50">

      {/* Post header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">

        <div className="rounded-full bg-gradient-to-tr from-violet-600 via-pink-500 to-orange-400 p-[2px]">
          <div className="rounded-full bg-white p-[2px]">
            <Avatar src={post.user.avatar} />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-sm font-extrabold text-gray-900">
              {post.user.name}
            </p>

            {post.user.verified && (
              <CheckCircle2
                size={15}
                className="shrink-0 fill-blue-500 text-white"
              />
            )}
          </div>

          <p className="mt-0.5 truncate text-[11px] font-medium text-gray-400">
            {post.user.handle} <span className="px-1">·</span> {post.time}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Post options"
            className="rounded-xl p-2 text-gray-400 transition hover:bg-violet-50 hover:text-violet-600"
          >
            <MoreHorizontal size={22} />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-11 z-10 w-40 overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-xl">
              <button
                onClick={() => {
                  setSaved(!saved);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2.5 text-left text-xs font-semibold text-gray-600 hover:bg-violet-50 hover:text-violet-600"
              >
                {saved ? 'Remove saved post' : 'Save post'}
              </button>

              <button
                onClick={() => setShowMenu(false)}
                className="w-full px-4 py-2.5 text-left text-xs font-semibold text-gray-600 hover:bg-violet-50 hover:text-violet-600"
              >
                Close menu
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Caption */}
      {post.text && (
        <div className="px-4 pb-4 sm:px-5">
          <p className="whitespace-pre-line text-[13px] leading-6 text-gray-600">
            {post.text}
          </p>
        </div>
      )}

      {/* Post image */}
      {post.image && (
        <div className="relative overflow-hidden bg-gray-100">
          <img
            src={post.image}
            alt={`Post by ${post.user.name}`}
            loading="lazy"
            className="max-h-[550px] w-full object-cover transition duration-700 group-hover:scale-[1.015]"
          />
        </div>
      )}

      {/* Engagement information */}
      <div className="flex items-center justify-between px-4 pt-4 sm:px-5">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-pink-500 text-white">
              <Heart size={11} fill="currentColor" />
            </span>
            <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-violet-500 text-[10px] font-bold text-white">
              A
            </span>
            <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-orange-400 text-[10px] font-bold text-white">
              J
            </span>
          </div>

          <span className="text-[11px] font-semibold text-gray-500">
            {post.likes.toLocaleString()} likes
          </span>
        </div>

        <button
          onClick={() => setShowComments(!showComments)}
          className="text-[11px] font-medium text-gray-400 transition hover:text-violet-600"
        >
          {post.comments + commentsList.length} comments
        </button>
      </div>

      {/* Action bar */}
      <div className="mx-4 mt-3 flex items-center justify-between border-t border-gray-100 py-3 sm:mx-5">

        <div className="flex items-center gap-5 sm:gap-7">

          <button
            onClick={() => onLike(post.id)}
            aria-label={post.liked ? 'Unlike post' : 'Like post'}
            className={`flex items-center gap-2 text-xs font-bold transition duration-200 hover:scale-110 ${
              post.liked ? 'text-pink-500' : 'text-gray-500 hover:text-pink-500'
            }`}
          >
            <Heart
              size={21}
              strokeWidth={2}
              fill={post.liked ? 'currentColor' : 'none'}
            />
            <span className="hidden sm:inline">
              Like
            </span>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 text-xs font-bold text-gray-500 transition hover:scale-110 hover:text-violet-600"
          >
            <MessageCircle size={21} />
            <span className="hidden sm:inline">
              Comment
            </span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-xs font-bold text-gray-500 transition hover:scale-110 hover:text-violet-600"
          >
            <Send size={20} />
            <span className="hidden sm:inline">
              Share
            </span>
          </button>
        </div>

        <button
          onClick={() => setSaved(!saved)}
          aria-label={saved ? 'Remove bookmark' : 'Bookmark post'}
          className={`transition hover:scale-110 ${
            saved ? 'text-violet-600' : 'text-gray-500 hover:text-violet-600'
          }`}
        >
          <Bookmark
            size={21}
            fill={saved ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      {/* Comments section */}
      {showComments && (
        <div className="border-t border-gray-100 bg-gray-50/70 p-4 sm:p-5">

          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-extrabold text-gray-800">
              Comments
            </h4>

            <button
              onClick={() => setShowComments(false)}
              aria-label="Close comments"
              className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-200"
            >
              <X size={17} />
            </button>
          </div>

          {commentsList.length === 0 ? (
            <p className="mb-4 text-xs text-gray-400">
              Be the first to share your thoughts!
            </p>
          ) : (
            <div className="mb-4 space-y-3">
              {commentsList.map((item) => (
                <div key={item.id} className="rounded-xl bg-white p-3">
                  <p className="text-xs font-extrabold text-gray-800">
                    You
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleComment} className="flex items-center gap-2">
            <div className="flex min-w-0 flex-1 items-center rounded-xl border border-gray-100 bg-white px-3 focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100">
              <Smile size={18} className="shrink-0 text-gray-400" />

              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs outline-none placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={!comment.trim()}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-4 py-3 text-xs font-bold text-white shadow-md shadow-purple-100 transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
            >
              Post
            </button>
          </form>
        </div>
      )}

    </article>
  );
}
