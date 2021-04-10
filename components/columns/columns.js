import styles from './columns.module.css'

export default function Columns({ children }) {
    return (
        <div className={styles.columns}>
            {children}
        </div>
    )
}