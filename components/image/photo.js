import Image from './image'

import styles from './image.module.css'

export default function Logo({ src, alt }) {
    return (
        <Image
            src={src}
            height="486"
            width="648"
            alt={alt}
        />
    )
}