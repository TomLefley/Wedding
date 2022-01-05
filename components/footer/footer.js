import styles from './footer.module.css'

import Logo from '../image/logo'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr/>
            <a href="mailto:contact@lefley.wedding">Contact us</a> | <a href="https://github.com/TomLefley/Wedding">Source</a> | © 2022 Thomas Lefley
        </footer>
    )
}