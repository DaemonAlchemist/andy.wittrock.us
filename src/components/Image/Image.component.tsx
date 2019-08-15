import * as React from 'react';
import "./Image.less";

const imageContainerStyle = (props:IImageProps):React.CSSProperties => ({
    border: "solid 1px",
    boxSizing: "border-box",
    float: props.left ? "left" : props.right ? "right" : undefined,
    marginBottom: "8px",
    marginLeft: props.right ? "1em" : 0,
    marginRight: props.left ? "1em" : 0,
    padding: "8px",
    textAlign: "center",
    width: `${props.left || props.right
        ? (props.small ? "25%" : "50%")
        : (props.small ? "50%" : "100%")
    }`,
});

export const Image = (props:IImageProps) =>
    <div
        className="image"
        style={imageContainerStyle(props)}
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
