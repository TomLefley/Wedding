import styles from './note.module.css'

export default function Note({ children }) {
    return (
        <p className={styles.note}>{children}</p>
    )
}