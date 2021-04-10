import styles from './route.module.css'

export default function External({ url, name }) {
    return (
        <a className={`${styles.route} ${styles.external}`} target="_blank" href={url}>{name}</a>
    )
}