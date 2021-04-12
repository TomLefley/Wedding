import NextImage from 'next/image'

import styles from './image.module.css'

export default function Image({ src, height, width, fit, alt }) {
    return (
        <div className={styles.container}>
            <NextImage
                priority
                src={src}
                height={height}
                width={width}
                layout="intrinsic"
                objectFit={fit}
                alt={alt}

                className={styles.image}
            />
        </div>
    )
}