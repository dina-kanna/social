
import { useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function Auth({ onLogin }) {

  const [signup, setSignup] = useState(false)

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [remember, setRemember] = useState(true)

  const [error, setError] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault()

    if (signup && !name.trim()) {
      setError('Please enter your name.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setError('')

    onLogin()

  }

  return (

    <div className="grid min-h-screen place-items-center bg-[#f7f7fb] p-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-soft sm:p-10">

        {/* Logo */}

        <div className="mb-8 text-center">

          <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">

            <Sparkles />

          </span>

          <h1 className="text-3xl font-extrabold text-ink">
            socially<span className="text-brand">.</span>
          </h1>

          <p className="mt-2 text-sm text-muted">
            {signup
              ? 'Create your account and find your people.'
              : 'Welcome back. We missed you!'}
          </p>

        </div>

        {/* Authentication form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {signup && (

            <div>

              <label className="mb-2 block text-xs font-bold text-muted">
                FULL NAME
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
              />

            </div>

          )}

          <div>

            <label className="mb-2 block text-xs font-bold text-muted">
              EMAIL ADDRESS
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
            />

          </div>

          <div>

            <label className="mb-2 block text-xs font-bold text-muted">
              PASSWORD
            </label>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              minLength="6"
              placeholder="At least 6 characters"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
            />

          </div>

          {/* Remember me */}

          {!signup && (

            <label className="flex items-center gap-2 text-sm text-muted">

              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-brand"
              />

              Remember me

            </label>

          )}

          {/* Error message */}

          {error && (

            <p className="text-sm text-red-500">
              {error}
            </p>

          )}

          {/* Submit */}

          <button
            type="submit"
            className="w-full rounded-xl bg-brand py-3.5 text-sm font-bold text-white shadow-md shadow-violet-200 hover:bg-violet-700"
          >
            {signup ? 'Create account' : 'Log in'}
          </button>

        </form>

        {/* Switch login/signup */}

        <p className="mt-6 text-center text-sm text-muted">

          {signup
            ? 'Already have an account?'
            : 'New to Socially?'}

          {' '}

          <button
            onClick={() => {
              setSignup(!signup)
              setError('')
            }}
            className="font-bold text-brand"
          >
            {signup ? 'Log in' : 'Sign up'}
          </button>

        </p>

        <p className="mt-5 text-center text-[11px] leading-5 text-gray-400">
          Demo interface · Authentication is local only.
          No account data is sent to a server.
        </p>

      </div>

    </div>

  )
}
