import * as React from 'react';

const dropCapStyle:React.CSSProperties = {
    float: "left",
    fontFamily: "Georgia",
    fontSize: "96px",
    lineHeight: "75px",
    paddingLeft: "3px",
    paddingRight: "8px",
    paddingTop: "4px",
};

export const DropCap = (props:any) =>
    <span style={props.preview ? undefined : dropCapStyle}>
        {React.Children.map(props.children, a=>a)}
    </span>
