import styles from './stationery.module.css'

export default function Item({ heading, title, description }) {
    let headingElement = heading &&
        <>
            <em>{heading}</em>
            <br/>
        </>

    let descriptionElement = description &&
        <>
            <br/>
            <span className={styles.description}>{description}</span>
        </>
    
    return (
        <p>
            {headingElement}
            {title.toUpperCase()}
            {descriptionElement}
        </p>
    )
}