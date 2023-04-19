import styles from '@/styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto grid h-full min-h-[640px] w-full bg-slate-50 sm:h-4/5 md:w-3/5 md:rounded-md lg:grid-cols-2">
        <div className="relative hidden overflow-hidden rounded-l-md bg-gradient-to-r from-blue-500 to-indigo-500 md:block">
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="py-10 text-center">{children}</div>
        </div>
      </div>
    </div>
  )
}
