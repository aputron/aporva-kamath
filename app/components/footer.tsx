import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/aporva-kamath-597a38135/"
          >
            <ArrowUpRightIcon className="stroke-[2.5] h-4 w-4"/>
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/aputron"
          >
            <ArrowUpRightIcon className="stroke-[2.5] h-4 w-4"/>
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://scholar.google.com/citations?user=3B8YckwAAAAJ&hl=en"
          >
            <ArrowUpRightIcon className="stroke-[2.5] h-4 w-4" />
            <p className="ml-2 h-7">google scholar</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
