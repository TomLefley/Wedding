import styles from './stationery.module.css'

import Image from '../image/image'

export default function Stationery({ title, card=false, foliage=false, children }) {
    let titleElement = title &&
        <h2>{title}</h2>
    
    return (
        <div className={`${styles.stationery} ${card ? styles.card : ""} ${foliage ? styles.foliage : ""}`}>
            {titleElement}
            {children}
        </div>
    )
}