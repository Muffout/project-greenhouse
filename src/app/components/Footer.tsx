import styles from "../styles/Home.module.css"

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <span>Powered by</span>
        <a
          href="https://blitzjs.com?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.textLink}
        >
          Blitz.js
        </a>
        <span>&</span>
        <a
          href="https://support.freepik.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.textLink}
        >
          Freepik.com
        </a>
      </footer>
    </>
  )
}
