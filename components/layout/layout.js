import Head from 'next/head'

import Footer from '../footer/footer'
import Navigation from '../navigation/navigation'

import styles from './layout.module.css'

export default function Layout({ pageName, reception, children }) {
    return (
        <div className={styles.layout}>
            <Head>
                <title>{`Thomas and Tara, 2021${pageName === "Home" ? "" : " - " + pageName}`}</title>
            </Head>
            <Navigation
                currentPage={pageName}
                reception={reception}
            />
            <div className={styles.content}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}