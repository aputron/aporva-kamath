'use client'

import { useState } from 'react'
import Link from 'next/link'
import { translateTextNodes, restoreTextNodes } from 'app/utils/translate'


const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://aputron.github.io/dissertation/': {
    name: 'thesis',
  },
  '/personal': {
    name: 'personal'
  }
}

export function Navbar() {
  const [translated, setTranslated] = useState(false)

  const handleToggleTranslate = () => {
    if (translated) {
      restoreTextNodes(document.body)
    } else {
      translateTextNodes(document.body)
    }
    setTranslated(!translated)
  }
  
  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <button
            onClick={handleToggleTranslate}
            className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full shadow-lg transition"
          >
            {translated ? 'Show Original' : 'Translate Page'}
          </button>
        </nav>
      </div>
    </aside>
  )
}
