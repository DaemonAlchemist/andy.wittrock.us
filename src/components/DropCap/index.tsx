import * as React from 'react';
import "./Dropcap.less";

export const DropCap = (props:any) =>
    <span className={props.preview ? undefined : "dropCap"}>
        {React.Children.map(props.children, a=>a)}
    </span>
