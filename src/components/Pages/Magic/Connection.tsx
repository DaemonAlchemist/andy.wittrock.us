import * as React from 'react';
import { Line } from 'react-konva';
import { IColor } from './Magic.d';
import { color, config, x, y } from './Magic.helpers';

export const Connection = (props:{i1:number, i2:number, w:number, c:IColor, selectedNode?:number, width:number}) =>
    [undefined, props.i1, props.i2].includes(props.selectedNode)
        ? <Line
            points={[
                x(props.i1, props.width),
                y(props.i1, props.width),
                x(props.i2, props.width),
                y(props.i2, props.width)
            ]}
            stroke={color(props.c, props.i1, props.i2)}
            strokeWidth={props.w * config.lineWidth}
        />
        : null;
