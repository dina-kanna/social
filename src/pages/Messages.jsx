
import { useMemo, useState, useRef, useEffect } from 'react';

import {
  Send,
  Search,
  ArrowLeft,
  MoreVertical,
  Phone,
  Video,
  Smile,
  Paperclip,
  CheckCheck,
  MessageCircle
} from 'lucide-react';

import { people } from '../data';
import Avatar from '../components/Avatar';

export default function Messages() {
  const [active, setActive] = useState(people[0]);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const [showChat, setShowChat] = useState(false);

  const messagesContainerRef = useRef(null);

  const [chatMessages, setChatMessages] = useState({
    [people[0].id]: [
      {
        id: 1,
        text: 'Hey! How have you been?',
        mine: false,
        time: '10:30 AM'
      },
      {
        id: 2,
        text: 'Doing great, thanks! Loved your latest post.',
        mine: true,
        time: '10:32 AM'
      },
      {
        id: 3,
        text: 'Thank you so much! 😊',
        mine: false,
        time: '10:33 AM'
      },
      {
        id: 4,
        text: 'We should catch up sometime!',
        mine: true,
        time: '10:35 AM'
      }
    ]
  });

  const filteredPeople = useMemo(() => {
    return people.filter((person) =>
      `${person.name} ${person.handle || ''}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const messages = chatMessages[active.id] || [];

  // Scroll ONLY the chat message container.
  useEffect(() => {
    const container = messagesContainerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, active.id]);

  const selectPerson = (person) => {
    setActive(person);
    setValue('');
    setShowChat(true);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const text = value.trim();

    if (!text) return;

    const newMessage = {
      id: Date.now(),
      text,
      mine: true,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setChatMessages((current) => ({
      ...current,
      [active.id]: [
        ...(current[active.id] || []),
        newMessage
      ]
    }));

    setValue('');
  };

  return (
    <div className="mx-auto flex h-[calc(100dvh-110px)] min-h-[480px] max-w-[1100px] flex-col overflow-hidden">

      {/* Page heading */}
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-ink">
            Messages
          </h1>
          <p className="mt-1 text-sm text-muted">
            Your conversations, all in one place.
          </p>
        </div>

        <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
          <MessageCircle size={21} />
        </div>
      </div>

      {/* Main messaging layout */}
      <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-lg shadow-purple-100/40 md:grid-cols-[320px_minmax(0,1fr)]">

        {/* Left sidebar */}
        <aside
          className={`min-h-0 flex-col border-r border-gray-100 ${
            showChat ? 'hidden md:flex' : 'flex'
          }`}
        >
          <div className="shrink-0 bg-gradient-to-r from-purple-600 to-pink-500 p-5 text-white">
            <h2 className="text-xl font-extrabold">
              Inbox
            </h2>
            <p className="mt-1 text-xs text-purple-100">
              Stay connected with your people.
            </p>
          </div>

          {/* Search */}
          <div className="shrink-0 p-4">
            <div className="relative">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search conversations..."
                className="w-full rounded-xl bg-gray-50 py-3 pl-10 pr-3 text-xs outline-none transition focus:ring-2 focus:ring-purple-100"
              />
            </div>
          </div>

          {/* Contacts */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 pb-3">
            <p className="px-3 pb-2 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
              Recent chats
            </p>

            {filteredPeople.map((person, index) => {
              const selected = active.id === person.id;

              const lastMessage =
                chatMessages[person.id]?.slice(-1)[0];

              return (
                <button
                  key={person.id}
                  onClick={() => selectPerson(person)}
                  className={`mb-1 flex w-full items-center gap-3 rounded-2xl p-3 text-left transition ${
                    selected
                      ? 'bg-purple-50'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="relative shrink-0">
                    <Avatar
                      src={person.avatar}
                      name={person.name}
                      size="lg"
                    />

                    {index % 2 === 0 && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={`truncate text-sm font-bold ${
                          selected ? 'text-purple-700' : 'text-ink'
                        }`}
                      >
                        {person.name}
                      </p>

                      <span className="shrink-0 text-[10px] text-gray-400">
                        {lastMessage?.time || 'Yesterday'}
                      </span>
                    </div>

                    <p className="mt-1 truncate text-xs text-muted">
                      {lastMessage?.text || 'Start a conversation'}
                    </p>
                  </div>
                </button>
              );
            })}

            {filteredPeople.length === 0 && (
              <p className="p-5 text-center text-sm text-muted">
                No conversations found.
              </p>
            )}
          </div>
        </aside>

        {/* Right chat section */}
        <section
          className={`min-h-0 min-w-0 flex-col overflow-hidden ${
            showChat ? 'flex' : 'hidden md:flex'
          }`}
        >
          {/* Chat header */}
          <header className="flex shrink-0 items-center justify-between border-b border-gray-100 bg-white p-4">
            <div className="flex min-w-0 items-center gap-3">
              <button
                onClick={() => setShowChat(false)}
                className="rounded-lg p-2 text-muted hover:bg-gray-100 md:hidden"
                aria-label="Back to conversations"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="relative shrink-0">
                <Avatar
                  src={active.avatar}
                  name={active.name}
                />

                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-sm font-extrabold text-ink">
                  {active.name}
                </h3>

                <p className="mt-1 text-[11px] font-medium text-emerald-500">
                  Online now
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1 text-purple-600">
              <button
                aria-label="Voice call"
                className="rounded-xl p-2.5 transition hover:bg-purple-50"
              >
                <Phone size={18} />
              </button>

              <button
                aria-label="Video call"
                className="rounded-xl p-2.5 transition hover:bg-purple-50"
              >
                <Video size={19} />
              </button>

              <button
                aria-label="More options"
                className="rounded-xl p-2.5 transition hover:bg-purple-50"
              >
                <MoreVertical size={19} />
              </button>
            </div>
          </header>

          {/* Messages: only this section scrolls */}
          <div
            ref={messagesContainerRef}
            className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain bg-[#faf9ff] p-4 sm:p-6"
          >
            <div className="my-2 shrink-0 text-center">
              <span className="rounded-full bg-white px-4 py-2 text-[10px] font-bold text-gray-400 shadow-sm">
                TODAY
              </span>
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex shrink-0 flex-col ${
                  message.mine ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] break-words rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm sm:max-w-[75%] ${
                    message.mine
                      ? 'rounded-br-sm bg-gradient-to-r from-purple-600 to-violet-500 text-white'
                      : 'rounded-bl-sm border border-gray-100 bg-white text-ink'
                  }`}
                >
                  {message.text}
                </div>

                <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-400">
                  {message.time}

                  {message.mine && (
                    <CheckCheck
                      size={13}
                      className="text-purple-500"
                    />
                  )}
                </div>
              </div>
            ))}

            {messages.length === 0 && (
              <div className="m-auto shrink-0 text-center">
                <MessageCircle
                  size={35}
                  className="mx-auto mb-3 text-purple-300"
                />

                <p className="font-bold text-ink">
                  Say hello!
                </p>

                <p className="mt-1 text-xs text-muted">
                  Start a conversation with {active.name}.
                </p>
              </div>
            )}
          </div>

          {/* Bottom message input - always visible */}
          <form
            onSubmit={sendMessage}
            className="flex shrink-0 items-center gap-2 border-t border-gray-100 bg-white p-3 sm:p-4"
          >
            <button
              type="button"
              aria-label="Emoji"
              className="hidden shrink-0 rounded-xl p-2.5 text-gray-400 transition hover:bg-purple-50 hover:text-purple-600 sm:block"
            >
              <Smile size={20} />
            </button>

            <button
              type="button"
              aria-label="Attach file"
              className="hidden shrink-0 rounded-xl p-2.5 text-gray-400 transition hover:bg-purple-50 hover:text-purple-600 sm:block"
            >
              <Paperclip size={20} />
            </button>

            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={`Message ${active.name}...`}
              className="h-12 min-w-0 flex-1 rounded-xl bg-gray-50 px-4 text-sm outline-none transition focus:ring-2 focus:ring-purple-100"
            />

            <button
              type="submit"
              disabled={!value.trim()}
              aria-label="Send message"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-md shadow-purple-200 transition hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={18} />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
