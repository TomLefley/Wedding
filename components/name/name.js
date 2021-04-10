import styles from './name.module.css'

export default function Name({ children }) {
    return (
        <h1 className={styles.name}>{children}</h1>
    )
}