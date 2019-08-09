import * as React from 'react';

export const Quote = (props:IQuoteProps) =>
    <blockquote>
        {React.Children.map(props.children, a => a)}
        <div style={{textAlign: "right"}}>-- <b>{props.author}</b></div>
    </blockquote>;
