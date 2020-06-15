import * as React from 'react';
import { Circle, Layer, Stage } from 'react-konva';
import { DropCap } from "../../DropCap";
import { Connection } from './Connection';
import { colors, config, harmonics, x, y } from './Magic.helpers';
import "./Magic.less";

const MagicComponent = (props:IPageComponentProps) => {
    const [width, setWidth] = React.useState(0);

    const ref = React.useRef(null);
    React.useEffect(() => {
        console.log(ref);
        setWidth(((ref || {current: null}).current || {scrollWidth: 0}).scrollWidth);
    }, [ref.current]);

    const [selectedNode, setSelectedNode] = React.useState<number | undefined>(undefined);
    const selectNode = (i:number) => () => {
        setSelectedNode(i !== selectedNode ? i : undefined);
    }

    return <>
        <p><DropCap preview={props.preview}>L</DropCap>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {!props.preview && <div ref={ref} style={{width: "100%"}}>
            <Stage width={width} height={width}>
                {harmonics.map((h) =>
                    <Layer key={h.level}>
                        {colors.map((c, i) => <>
                            {h.offsets.map((o) =>
                                <Connection key={o} i1={i} i2={i + o} w={h.width} c={h.color} width={width} selectedNode={selectedNode} />
                            )}
                        </>)}
                    </Layer>
                )}
                <Layer>
                    {colors.map((c, i) => <>
                        <Circle
                            onClick={selectNode(i)}
                            key={i}
                            x={x(i, width)}
                            y={y(i, width)}
                            radius={config.radius}
                            fill={c.color}
                            stroke={c.stroke}
                        />
                    </>)}
                </Layer>
            </Stage>
        </div>}
    </>;
}

export const magic:IPage = {
    Component: MagicComponent,
    listed: true,
    published: "2020-06-13",
    tags: [],
    title: "Magic",
    updated: "",            
    url: "/magic",
};
