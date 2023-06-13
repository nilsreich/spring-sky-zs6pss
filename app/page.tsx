
import {Test } from '@/components/Test';
import Link from "next/link";

export default async function Home() {


  return (
    <main>
      <Link href="./student">student</Link>
      <Link href="./teacher">teacher</Link>
      <Link href="./login">Login</Link>
      <Test />
    </main>
  );
}
