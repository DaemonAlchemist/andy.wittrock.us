import * as React from 'react';

const generateColumns = (count:number) => new Array(count)
    .fill(`calc((100% - ${count - 1}*8px) / ${count})`)
    .join(" ");

export const Grid = (props:IGridProps) =>
    <div className="grid" style={{
        display: "grid",
        gridColumnGap: "8px",
        gridRowGap: "8px",
        gridTemplateColumns: generateColumns(props.columns),
        marginBottom: "8px",
        width: "100%",
    }}>
        {React.Children.map(props.children, a => a)}
    </div>;
