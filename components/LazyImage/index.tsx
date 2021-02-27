import React, { useRef } from "react";
import LazyLoad from "react-lazyload";
import Link from 'next/link';

import styles from '@styles/LazyImage.module.scss';
import clsx from "clsx";

export interface LazyImageProps {
    src: string,
    alt: string,
    link?: string,
}

const LazyImage = ({ src, alt, link }: LazyImageProps) => {
    const ref = useRef<HTMLDivElement>();

    const removePlaceholder = (): void => {
        ref.current.remove();
    };

    return (
        <>
            {/* <Placeholder ref={ref} alt={alt} placeholder={placeholder} /> */}
            {/* <img ref={ref} className="card-img-top" alt={alt} src={finalSrc} /> */}
            <div className={styles.container}>
                <div ref={ref} className={styles.placeholder} />
                <LazyLoad>
                <Link href={link} as={link}>
                    <img
                        src={src}
                        alt={alt}
                        onLoad={removePlaceholder}
                        onError={removePlaceholder}
                        className={clsx(styles.imgMaxHeight, "card-img-top")}
                    />
                    </Link>
                </LazyLoad>
            </div>
        </>
    );
};

export default LazyImage;
