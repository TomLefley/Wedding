import Image from './image'

import styles from './image.module.css'

export default function Photo({ src, alt }) {
    return (
        <Image
            src={src}
            height="308"
            width="308"
            fit="scale-down"
            alt={alt}
        />
    )
}