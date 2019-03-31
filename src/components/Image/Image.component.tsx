import { Col } from 'antd';
import * as React from 'react';

const imageContainerStyle = (props:IImageProps):React.CSSProperties => ({
    border: "solid 1px",
    float: props.left ? "left" : props.right ? "right" : undefined,
    marginLeft: props.right ? "8px" : 0,
    marginRight: props.left ? "8px" : 0,
    padding: "8px",
    textAlign: "center",
});

export const Image = (props:IImageProps) =>
    <Col
        sm={props.left || props.right ? 12 : 24}
        xs={24}
        style={imageContainerStyle(props)}
    >
        <img
            src={props.src}
            alt={props.alt}
            style={{
                marginBottom: !!props.children ? "4px" : 0,
                width: "100%",
            }}
        />
        {React.Children.map(props.children, a => a)}
    </Col>;
