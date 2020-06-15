import * as React from 'react';
import { Circle, Layer, Stage } from 'react-konva';
import { DropCap } from "../../DropCap";
import { Connection } from './Connection';
import { colors, config, getHarmonicValue, harmonics, resonance, x, y } from './Magic.helpers';
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
            {selectedNode !== undefined && <>
                <h2>
                    {colors[selectedNode].kingdom || <>{colors[selectedNode].name} Kingdom</>}
                    ({colors[selectedNode].name})
                </h2>
                <table>
                    <thead>
                        <tr>
                            <th>1st Harmonic<br/>{harmonics[0].name}</th>
                            <th>2nd Harmonic<br/>{harmonics[1].name}</th>
                            <th>3rd Harmonic<br/>{harmonics[2].name}</th>
                            <th>4th Harmonic<br/>{harmonics[2].name}</th>
                            <th>5th Harmonic<br/>{harmonics[4].name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {[0, 1, 2, 3, 4].map((i) =>
                                <td key={i} style={{textAlign: "center"}}>{getHarmonicValue(selectedNode, i)}</td>
                            )}
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <th>Kingdom</th>
                        <th>Resonance</th>
                        <th>1st Harmonic<br/>{harmonics[0].name}</th>
                        <th>2nd Harmonic<br/>{harmonics[1].name}</th>
                        <th>3rd Harmonic<br/>{harmonics[2].name}</th>
                        <th>4th Harmonic<br/>{harmonics[3].name}</th>
                        <th>5th Harmonic<br/>{harmonics[4].name}</th>
                    </thead>
                    <tbody>
                        {colors.map((c, i) => i !== selectedNode
                            ? <tr key={i}>
                                <td>{c.kingdom || <>{c.name} Kingdom</>}</td>
                                <td style={{textAlign: "right"}}>{resonance(selectedNode, i).toFixed(4)}</td>
                                {harmonics.map((h, hi) => {
                                    const match = h.offsets.map((o) => (i + o + 12) % 12).includes(selectedNode);
                                    return <td key={h.level} style={{
                                        backgroundColor: match ? "#bbffbb" : undefined,
                                        color: match ? "#008800" : undefined,
                                        fontWeight: match ? "bold" : undefined,
                                        textAlign: "center",
                                    }}>
                                        {getHarmonicValue(i, hi)}
                                    </td>
                                })}
                            </tr>
                            : null
                        )}
                    </tbody>
                </table>
            </>}
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
