import Link from "next/link"

import { PlaneTakeoff } from 'lucide-react'
import Image from "next/image"

export const Navbar = () => {
  return (
    <header className="w-full py-5 shadow-sm">
      <nav className="flex items-end">
        <div className="logo">
          <Link href="/" className="inline-flex items-center gap-2">
            <h1 className="text-2xl md:text-6xl font-bold tracking-tighter">Japa</h1>
            <PlaneTakeoff />
          </Link>
        </div>
        <div className="ml-auto flex gap-8">
          <button className="bg-zinc-50 py-1 px-2 rounded-md text-sm font-semibold hover:bg-zinc-200 dark:text-black">
            GBP
          </button>
          <button>
            <Image src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" height={30} width={30} alt="United Kingdom"/>
          </button>
          <div className="bg-zinc-100 h-10 w-10 rounded-full border">
            
          </div>
        </div>
      </nav>
    </header>
  )
}

