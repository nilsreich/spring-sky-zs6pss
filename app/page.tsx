
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from "next/link";
import { redirect } from 'next/navigation'

export default async function Home() {

  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.from('sessions').select('*')
  data?.length! > 0 ? redirect('/student') : redirect('/login')
  return (
    <main>
      <Link href="./student">student</Link>
      <Link href="./teacher">teacher</Link>
      <Link href="./login">Login</Link>
    </main>
  );
}
