import styles from './map.module.css'

export default function Notes({ source }) {
    return (
        <iframe className={styles.map} src={source} frameBorder="0" allowFullScreen="" aria-hidden="false"/>
    )
}