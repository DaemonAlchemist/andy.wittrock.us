import * as React from 'react';
import { Circle, Layer, Line, Stage } from 'react-konva';
import { DropCap } from "../../DropCap";
import "./Magic.less";

const colors = [
    {name: "Red",        color: "#ff0000"},
    {name: "Vermillion", color: "#ff4400"},
    {name: "Orange",     color: "#ff8800"},
    {name: "Amber",      color: "#ffbb00"},
    {name: "Yellow",     color: "#ffff00"},
    {name: "Chartreuse", color: "#88ff00"},
    {name: "Green",      color: "#00ff00"},
    {name: "Teal",       color: "#00ffff"},
    {name: "Blue",       color: "#0000ff"},
    {name: "Violet",     color: "#4400ff"},
    {name: "Purple",     color: "#8800ff"},
    {name: "Magenta",    color: "#ff00ff"},
]

interface IColor {r:number; g:number; b:number;};

const MagicComponent = (props:IPageComponentProps) => {
    const [width, setWidth] = React.useState(0);

    const ref = React.useRef(null);
    React.useEffect(() => {
        console.log(ref);
        setWidth(((ref || {current: null}).current || {scrollWidth: 0}).scrollWidth);
    }, [ref.current]);

    const offset = 0.4;
    const rotation = 1;
    const radius = 36;
    const lineWidth = 4;

    const x = (i:number) => width / 2 + sin(i) * offset * width;
    const y = (i:number) => width / 2 + cos(i) * offset * width;

    const sin = (i:number) => Math.sin((i + rotation) * Math.PI / 6);
    const cos = (i:number) => Math.cos((i + rotation) * Math.PI / 6);

    const harmonicColor1Alt = {r:255, g:  0, b:  0};
    const harmonicColor1    = {r:  0, g:255, b:  0};

    const harmonicColor2Alt = {r:255, g:255, b:  0};
    const harmonicColor2    = {r:255, g:  0, b:255};

    const harmonicColor3Alt = {r:255, g:128, b:  0};
    const harmonicColor3    = {r:  0, g:  0, b:255};

    const harmonicColor4    = {r:  0, g:255, b:255};
    const harmonicColor4Alt = {r:255, g: 64, b:  0};

    const harmonicColor5Alt = {r:255, g: 96, b:  0};
    const harmonicColor5    = {r: 64, g:  0, b:255};

    const resonance1Mult = 1.000; //  2 zones x 6
    const resonance2Mult = 0.500; //  4 zones x 3
    const resonance3Mult = 0.333; //  6 zones x 2
    const resonance4Mult = 0.167; // 12 zones x 1
    const multTotal = resonance1Mult + resonance2Mult + resonance3Mult + resonance4Mult;

    const resonance = (i1:number, i2:number) => {
        const dot1 = Math.round((cos(i1 * 1) * cos(i2 * 1) + sin(i1 * 1) * sin(i2 * 1)) * 1000) / 1000;
        const dot2 = Math.round((cos(i1 * 2) * cos(i2 * 2) + sin(i1 * 2) * sin(i2 * 2)) * 1000) / 1000;
        const dot3 = Math.round((cos(i1 * 3) * cos(i2 * 3) + sin(i1 * 3) * sin(i2 * 3)) * 1000) / 1000;
        const dot4 = Math.round((cos(i1 * 6) * cos(i2 * 6) + sin(i1 * 6) * sin(i2 * 6)) * 1000) / 1000;
        return (
            dot1 * resonance1Mult +
            dot2 * resonance2Mult +
            dot3 * resonance3Mult +
            dot4 * resonance4Mult
        ) / multTotal;
    }

    const color = (col:IColor, colAlt:IColor, i1:number, i2:number) => {
        let dot = resonance(i1, i2);
        const c = dot < 0.0 ? colAlt : col;
        dot = Math.abs(dot);

        return `rgba(${c.r}, ${c.g}, ${c.b}, ${dot})`;
    }

    const [selectedNode, setSelectedNode] = React.useState<number | undefined>(undefined);
    const selectNode = (i:number) => () => {
        setSelectedNode(i !== selectedNode ? i : undefined);
    }

    const Connection = (p:{i1:number, i2:number, w:number, c:IColor, cAlt:IColor}) =>
        [undefined, p.i1, p.i2].includes(selectedNode)
            ? <Line
                points={[x(p.i1), y(p.i1), x(p.i2), y(p.i2)]}
                stroke={color(p.c, p.cAlt, p.i1, p.i2)}
                strokeWidth={p.w * lineWidth}
            />
            :null;

    // const harmonics = [
    //     {level: 1, width:5, offsets: [6],                                 main: {}, alt: {}},
    //     {level: 2, width:4, offsets: [4, -4],                             main: {}, alt: {}},
    //     {level: 3, width:3, offsets: [3, -3, -6],                         main: {}, alt: {}},
    //     {level: 4, width:2, offsets: [2, 4, 6, -2, -4],                   main: {}, alt: {}},
    //     {level: 5, width:1, offsets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], main: {}, alt: {}},
    // ]

    return <>
        <p><DropCap preview={props.preview}>L</DropCap>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {!props.preview && <div ref={ref} style={{width: "100%"}}>
            <Stage width={width} height={width}>
                <Layer>
                    {colors.map((c, i) => <>
                        <Connection i1={i} i2={i+6} w={4} c={harmonicColor1} cAlt={harmonicColor1Alt}/>
                    </>)}
                </Layer>
                <Layer>
                    {colors.map((c, i) => <>
                        <Connection i1={i} i2={i+4} w={3} c={harmonicColor2} cAlt={harmonicColor2Alt}/>
                        <Connection i1={i} i2={i-4} w={3} c={harmonicColor2} cAlt={harmonicColor2Alt}/>
                    </>)}
                </Layer>
                <Layer>
                    {colors.map((c, i) => <>
                        <Connection i1={i} i2={i+3} w={2} c={harmonicColor3} cAlt={harmonicColor3Alt}/>
                        <Connection i1={i} i2={i-3} w={2} c={harmonicColor3} cAlt={harmonicColor3Alt}/>
                        <Connection i1={i} i2={i-6} w={2} c={harmonicColor3} cAlt={harmonicColor3Alt}/>
                    </>)}
                </Layer>
                <Layer>
                    {colors.map((c, i) => <>
                        <Connection i1={i} i2={i+2} w={1} c={harmonicColor4} cAlt={harmonicColor4Alt}/>
                        <Connection i1={i} i2={i+4} w={1} c={harmonicColor4} cAlt={harmonicColor4Alt}/>
                        <Connection i1={i} i2={i+6} w={1} c={harmonicColor4} cAlt={harmonicColor4Alt}/>
                        <Connection i1={i} i2={i-2} w={1} c={harmonicColor4} cAlt={harmonicColor4Alt}/>
                        <Connection i1={i} i2={i-4} w={1} c={harmonicColor4} cAlt={harmonicColor4Alt}/>
                    </>)}
                </Layer>
                <Layer>
                    {colors.map((c, i) => <>
                        <Connection i1={i} i2={i+ 1} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                        <Connection i1={i} i2={i+ 2} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                        <Connection i1={i} i2={i+ 3} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                        <Connection i1={i} i2={i+ 4} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                        <Connection i1={i} i2={i+ 5} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                        <Connection i1={i} i2={i+ 6} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                        <Connection i1={i} i2={i+ 7} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                        <Connection i1={i} i2={i+ 8} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                        <Connection i1={i} i2={i+ 9} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                        <Connection i1={i} i2={i+ 0} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                        <Connection i1={i} i2={i+11} w={1} c={harmonicColor5} cAlt={harmonicColor5Alt}/>
                    </>)}
                </Layer>
                <Layer>
                    {colors.map((c, i) => <>
                        <Circle onClick={selectNode(i)} key={i} x={x(i)} y={y(i)} radius={radius} fill={c.color} stroke="#000000"/>
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
