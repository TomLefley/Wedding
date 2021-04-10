import styles from './stationery.module.css'

export default function Stationery({ title, card=false, children }) {
    let titleElement = title &&
        <h2>{title}</h2>
    
    return (
        <div className={`${styles.stationery} ${card ? styles.card : ""}`}>
            {titleElement}
            {children}
        </div>
    )
}