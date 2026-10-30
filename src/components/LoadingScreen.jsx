
export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#17102e] via-[#30205c] to-[#120d24]">

      {/* Background decorations */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="relative z-10 text-center">

        {/* Animated logo */}
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">

          <div className="absolute inset-0 animate-spin rounded-[28px] border-2 border-dashed border-purple-300/60" />

          <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-2xl shadow-purple-500/40" />

          <svg
            className="relative z-10 text-white"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v18M3 12h18" />
            <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />
          </svg>
        </div>

        {/* Brand */}
        <h1 className="text-5xl font-black tracking-tight text-white">
          socially<span className="text-fuchsia-400">.</span>
        </h1>

        <p className="mt-3 text-sm tracking-[3px] text-purple-200">
          CONNECT. SHARE. BELONG.
        </p>

        {/* Loading animation */}
        <div className="mx-auto mt-12 w-56">

          <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-violet-400 to-pink-400" />
          </div>

          <p className="mt-4 animate-pulse text-xs font-medium tracking-widest text-purple-200">
            GETTING THINGS READY...
          </p>

        </div>

        <p className="mt-16 text-xs text-white/40">
          Your people. Your moments.
        </p>

      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-110%); }
          100% { transform: translateX(220%); }
        }
      `}</style>

    </div>
  );
}
