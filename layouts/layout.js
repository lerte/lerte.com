import styles from '@/styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto grid h-3/4 w-3/5 rounded-md bg-slate-50 lg:grid-cols-2">
        <div className={styles.imgStyle}>
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
