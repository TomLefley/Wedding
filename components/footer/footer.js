import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr/>
            <a href="mailto:contact@lefley.wedding">Contact us</a> | © 2021 Thomas Lefley
        </footer>
    )
}