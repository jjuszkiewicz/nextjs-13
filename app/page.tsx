import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Witamy w Next.js 13!
        </h1>
      </main>

    </div>
  )
}
