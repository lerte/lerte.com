import Link from 'next/link'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-white/95 sticky top-0 z-40 w-full flex-none bg-white backdrop-blur transition-colors duration-500 dark:border-neutral-50/[0.06] dark:bg-neutral-900/75 lg:z-50 lg:border-b lg:border-neutral-900/10">
      <div className="max-w-8xl mx-auto">
        <header className="mx-4 border-b border-neutral-900/10 py-4 dark:border-neutral-300/10 lg:mx-0 lg:border-0 lg:px-8">
          <div className="relative flex items-center">
            <div className="relative ml-auto hidden items-center lg:flex">
              <nav className="flex space-x-4 text-sm font-semibold leading-6 text-neutral-700 dark:text-neutral-200 sm:justify-center">
                {[
                  ['首页', '/'],
                  ['文章', '/blog'],
                  ['作品', '/work'],
                  ['吉他谱', '/guitar'],
                  ['ChatGPT', '/chatgpt'],
                  ['Playground', '/playground']
                ].map(([title, url], index) => (
                  <Link
                    key={index}
                    href={url}
                    className="hover:text-red-700 dark:hover:text-red-600"
                  >
                    {title}
                  </Link>
                ))}
              </nav>
              <div className="ml-6 flex items-center border-l border-neutral-200 pl-6 dark:border-neutral-800">
                <ThemeSwitcher />
                <a
                  target="_blank"
                  href="https://github.com/lerte/lerte.com"
                  className="ml-6 block text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300"
                >
                  <span className="sr-only">Source on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
