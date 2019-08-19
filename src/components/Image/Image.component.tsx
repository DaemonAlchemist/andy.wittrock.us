import * as React from 'react';
import "./Image.less";

export const Image = (props:IImageProps) =>
    <div
        className={
            ['image']
            .concat(props.left ? ["left"] : [])
            .concat(props.right ? ["right"] : [])
            .concat(props.small ? ["small"] : [])
            .join(" ")
        }
    >
        <img
            src={props.src}
            alt={props.alt}
            style={{
                marginBottom: !!props.children ? "4px" : "-6px",
                width: "100%",
            }}
        />
        {React.Children.map(props.children, a => a)}
    </div>;
