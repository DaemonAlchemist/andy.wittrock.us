import * as React from 'react';
import { Circle, Layer, Stage } from 'react-konva';
import { DropCap } from "../../DropCap";
import { Connection } from './Connection';
import { colors, config, getHarmonicValue, harmonics, resonance, x, y } from './Magic.helpers';
import "./Magic.less";

const SpellClass = (props:{i:number, harmonics:number[]}) => <>
    <span className="spell-class">
        {props.harmonics.map((h) => getHarmonicValue(props.i, h)).join(" / ")}
    </span>
</>;

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

    const [selectedRelation, setSelectedRelation] = React.useState<number | undefined>(undefined);
    const selectRelation = (i:number) => () => {
        setSelectedRelation(i !== selectedRelation ? i : undefined);
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
                    <span style={{
                        backgroundColor: colors[selectedNode].color,
                        display: "inline-block",
                        height: "16px",
                        marginRight: "8px",
                        width: "16px",
                    }} />
                    {colors[selectedNode].kingdom || <>{colors[selectedNode].name} Kingdom</>}
                </h2>
                <table className="data-table info-table">
                    <thead>
                        <tr>
                            <th>1st Harmonic<br/><em>{harmonics[0].name}</em></th>
                            <th>2nd Harmonic<br/><em>{harmonics[1].name}</em></th>
                            <th>3rd Harmonic<br/><em>{harmonics[2].name}</em></th>
                            <th>4th Harmonic<br/><em>{harmonics[3].name}</em></th>
                            <th>5th Harmonic<br/><em>{harmonics[4].name}</em></th>
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

                <h2>Spell Classes</h2>
                <SpellClass i={selectedNode} harmonics={[0]} />
                <SpellClass i={selectedNode} harmonics={[1]} />
                <SpellClass i={selectedNode} harmonics={[2]} />
                <SpellClass i={selectedNode} harmonics={[3]} />
                <SpellClass i={selectedNode} harmonics={[4]} />
                <SpellClass i={selectedNode} harmonics={[0, 1]} />
                <SpellClass i={selectedNode} harmonics={[0, 2]} />
                <SpellClass i={selectedNode} harmonics={[0, 3]} />
                <SpellClass i={selectedNode} harmonics={[0, 4]} />
                <SpellClass i={selectedNode} harmonics={[1, 2]} />
                <SpellClass i={selectedNode} harmonics={[1, 3]} />
                <SpellClass i={selectedNode} harmonics={[1, 4]} />
                <SpellClass i={selectedNode} harmonics={[2, 3]} />
                <SpellClass i={selectedNode} harmonics={[2, 4]} />
                <SpellClass i={selectedNode} harmonics={[3, 4]} />
                <SpellClass i={selectedNode} harmonics={[0, 1, 2]} />
                <SpellClass i={selectedNode} harmonics={[0, 1, 3]} />
                <SpellClass i={selectedNode} harmonics={[0, 1, 4]} />
                <SpellClass i={selectedNode} harmonics={[0, 2, 3]} />
                <SpellClass i={selectedNode} harmonics={[0, 2, 4]} />
                <SpellClass i={selectedNode} harmonics={[0, 3, 4]} />
                <SpellClass i={selectedNode} harmonics={[1, 2, 3]} />
                <SpellClass i={selectedNode} harmonics={[1, 2, 4]} />
                <SpellClass i={selectedNode} harmonics={[1, 3, 4]} />
                <SpellClass i={selectedNode} harmonics={[2, 3, 4]} />
                <SpellClass i={selectedNode} harmonics={[0, 1, 2, 3]} />
                <SpellClass i={selectedNode} harmonics={[0, 1, 2, 4]} />
                <SpellClass i={selectedNode} harmonics={[0, 1, 3, 4]} />
                <SpellClass i={selectedNode} harmonics={[0, 2, 3, 4]} />
                <SpellClass i={selectedNode} harmonics={[1, 2, 3, 4]} />
                <SpellClass i={selectedNode} harmonics={[0, 1, 2, 3, 4]} />

                <h2>Harmonic Relations</h2>
                <table className="data-table relation-table">
                    <thead>
                        <th>Kingdom</th>
                        <th>Resonance</th>
                        <th>1st Harmonic<br/><em>{harmonics[0].name}</em></th>
                        <th>2nd Harmonic<br/><em>{harmonics[1].name}</em></th>
                        <th>3rd Harmonic<br/><em>{harmonics[2].name}</em></th>
                        <th>4th Harmonic<br/><em>{harmonics[3].name}</em></th>
                        <th>5th Harmonic<br/><em>{harmonics[4].name}</em></th>
                    </thead>
                    <tbody>
                        {colors.map((c, i) => i !== selectedNode
                            ? <tr
                                className={i === selectedRelation ? "selected-relation" : undefined}
                                key={i}
                                onClick={selectRelation(i)}
                            >
                                <td style={{whiteSpace: "nowrap"}}>
                                    <span style={{
                                        backgroundColor: c.color,
                                        display: "inline-block",
                                        height: "16px",
                                        marginRight: "8px",
                                        width: "16px",
                                    }} />
                                    {c.kingdom || <>{c.name} Kingdom</>}
                                </td>
                                <td style={{
                                    backgroundColor: resonance(selectedNode, i) < 0
                                        ? `rgba(255,   0, 0, ${Math.abs(resonance(selectedNode, i))})`
                                        : `rgba(  0, 255, 0, ${Math.abs(resonance(selectedNode, i))})`,
                                    textAlign: "right",
                                }}>
                                    {resonance(selectedNode, i).toFixed(4)}
                                </td>
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
                
                {selectedNode !== undefined && selectedRelation !== undefined && <>
                </>}

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
