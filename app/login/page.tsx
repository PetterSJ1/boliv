'use client'

import { useActionState } from 'react'
import { login, signup } from '@/app/actions/auth'
import Link from 'next/link'

const initialState = { error: '' }

export default function LoginPage() {
  const [loginState, loginAction, loginPending] = useActionState(login, initialState)
  const [signupState, signupAction, signupPending] = useActionState(signup, initialState)

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-100 dark:border-zinc-800">
        <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
          boliv
        </Link>
      </nav>

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Logg inn eller registrer deg
          </h1>

          {(loginState?.error || signupState?.error) && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 text-sm">
              {loginState?.error || signupState?.error}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <input
              form="auth-form"
              type="email"
              name="email"
              placeholder="din@epost.no"
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              form="auth-form"
              type="password"
              name="password"
              placeholder="Passord"
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <form id="auth-form" className="flex gap-3 mt-1">
              <button
                formAction={loginAction}
                disabled={loginPending || signupPending}
                className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-semibold transition-colors"
              >
                {loginPending ? 'Logger inn…' : 'Logg inn'}
              </button>
              <button
                formAction={signupAction}
                disabled={loginPending || signupPending}
                className="flex-1 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 disabled:opacity-50 text-zinc-700 dark:text-zinc-300 text-sm font-semibold transition-colors"
              >
                {signupPending ? 'Registrerer…' : 'Registrer deg'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
