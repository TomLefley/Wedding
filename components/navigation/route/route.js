import Link from 'next/link'

import styles from './route.module.css'

export default function Route({ path, name, currentPage }) {
    let active = name === currentPage;

    return (
        <Link href={path}>
            <a className={`${styles.route} ${active ? styles.active : ""}`}>{name}</a>
        </Link>
    )
}