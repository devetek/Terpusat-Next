import React from "react";

export interface IframeProps {
    src: string,
    title: string,
    height: string | number,
    width: string | number,
    tabIndex: number,
    frameBorder: number,
    className?: any,
}

const Iframe = ({ src, title, width = '100%', height = 450, frameBorder = 0, tabIndex = 0, className = null }: IframeProps) => {
    return (
        <iframe
            title={title}
            src={src}
            width={width}
            height={height}
            frameBorder={frameBorder}
            aria-hidden="false"
            tabIndex={tabIndex}
            className={className}
        />
    )
}

export default Iframe;
