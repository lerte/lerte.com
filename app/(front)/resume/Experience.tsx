type Props = {
  company: string
  title: string
  location: string
  jobType: string
  period: string
  content: string
}
export default function Experience({
  company,
  title,
  location,
  jobType,
  period,
  content
}: Props) {
  return (
    <div className="mb-5 flex items-start">
      <div className="ml-3 w-full space-y-5">
        <div className="justify-between sm:flex">
          <div className="space-y-2">
            <div className="font-medium dark:text-slate-50">{company}</div>
            <div className="space-y-1 sm:flex sm:space-x-5">
              <div className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  ></path>
                </svg>
                <span>{title}</span>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  ></path>
                </svg>
                <span>{location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between space-y-1 sm:block sm:text-right">
            <div className="order-last inline-flex items-center rounded-lg bg-primary-500/20 px-2 py-1 text-xs font-medium text-primary-500">
              {jobType}
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                ></path>
              </svg>
              <span>{period}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300">{content}</p>
        <div className="border-b border-dashed border-gray-200 dark:border-slate-600"></div>
      </div>
    </div>
  )
}
