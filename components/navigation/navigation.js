import Link from 'next/link'

import Route from './route/route'
import External from './route/external'

import styles from './navigation.module.css'

export default function Navigation({ currentPage, reception }) {
    return (
        <header className={styles.header}>
            <div className={styles.bar}>
                <Route
                    path="/"
                    name="Home"
                    currentPage={currentPage}
                />
                <Route
                    path="/venue"
                    name="Venue"
                    currentPage={currentPage}
                />
                <Route
                    path="/service"
                    name="Service"
                    currentPage={currentPage}
                />
                <Route
                    path="/menu"
                    name="Menu"
                    currentPage={currentPage}
                />
                <Route
                    path="/gifts"
                    name="Gifts"
                    currentPage={currentPage}
                />
                <External
                    url={reception ? "https://weddings.papier.com/tom-tara/rsvp-070821-reception" : "https://weddings.papier.com/tom-tara/rsvp-070821"}
                    name="RSVP"
                />
            </div>
            <hr/>
        </header>
    )
}