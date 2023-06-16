import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

import type { Database } from '@/lib/database.types'

export default async function Login() {
  const handleSignUp = async (formData: FormData) => {
    'use server'
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))

    const supabase = createServerActionClient<Database>({ cookies })
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'http://localhost:3000/auth/callback',
      },
    })

    revalidatePath('/')
  }

  const handleSignIn = async (formData: FormData) => {
    'use server'
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))

    const supabase = createServerActionClient<Database>({ cookies })
    await supabase.auth.signInWithPassword({
      email,
      password,
    })

    revalidatePath('/')
  }

  const handleSignOut = async () => {
    'use server'
    const supabase = createServerActionClient<Database>({ cookies })
    await supabase.auth.signOut()
    revalidatePath('/')
  }

  return (
    <div className="h-screen bg-[#bbb]/10 text-gray-900 dark:text-gray-100">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 dark:bg-[#1e1e1e] lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={handleSignUp}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 bg-transparent px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4cc38a] dark:text-gray-100 dark:ring-gray-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6">Password</label>
                <div className="text-sm">
                  <a href="#" className="text-xs text-neutral-400">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 bg-transparent px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4cc38a] dark:text-gray-100 dark:ring-gray-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="space-y-4">
              <button formAction={handleSignIn} className="flex w-full justify-center rounded-md bg-[#3cb179] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4cc38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3cb179]">Sign in</button>
              <button className="text-sm">Create an account</button>
              {
                // <button formAction={handleSignOut}>Sign out</button>
              }
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}