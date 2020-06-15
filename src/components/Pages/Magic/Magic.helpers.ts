import { IColor } from './Magic.d';

export const colors = [
    {name: "Red",        kingdom: "",         color: "#ff0000", stroke: "#880000"},
    {name: "Vermillion", kingdom: "",         color: "#ff4400", stroke: "#882200"},
    {name: "Orange",     kingdom: "",         color: "#ff8800", stroke: "#884400"},
    {name: "Amber",      kingdom: "",         color: "#ffbb00", stroke: "#886600"},
    {name: "Yellow",     kingdom: "",         color: "#ffff00", stroke: "#888800"},
    {name: "Chartreuse", kingdom: "",         color: "#88ff00", stroke: "#448800"},
    {name: "Green",      kingdom: "",         color: "#00ff00", stroke: "#008800"},
    {name: "Teal",       kingdom: "",         color: "#00ffff", stroke: "#008888"},
    {name: "Blue",       kingdom: "Nidera",   color: "#0000ff", stroke: "#000088"},
    {name: "Violet",     kingdom: "",         color: "#4400ff", stroke: "#220088"},
    {name: "Purple",     kingdom: "",         color: "#8800ff", stroke: "#440088"},
    {name: "Magenta",    kingdom: "Saragosa", color: "#ff00ff", stroke: "#880088"},
];

export const harmonicValues = [
    ["Increase", "Pull", "Confront", "Decrease", "Push", "Avoid"],
    ["Water", "Earth", "Fire", "Wind"],
    ["Create", "Destroy", "Maintain"],
    ["Order", "Chaos"],
    ["Life"],
]

export const getHarmonicValue = (offset:number, harmonic:number) => harmonicValues[harmonic][offset % harmonicValues[harmonic].length];

export const harmonics = [
    {level: 1, name: "Action",   width:5, offsets: [6],                                 color: {r:255, g:  0, b:  0}},
    {level: 2, name: "Element",  width:4, offsets: [4, -4],                             color: {r:  0, g:255, b:  0}},
    {level: 3, name: "Method",   width:3, offsets: [3, -3, -6],                         color: {r:  0, g:  0, b:255}},
    {level: 4, name: "Attitude", width:2, offsets: [2, 4, 6, -2, -4],                   color: {r:255, g:255, b:  0}},
    {level: 5, name: "Energy",   width:1, offsets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], color: {r:255, g:  0, b:255}},
]

export const config = {
    lineWidth: 4,
    offset: 0.4,
    radius: 36,
    rotation: 1,
}

export const x = (i:number, width:number) => width / 2 + sin(i) * config.offset * width;
export const y = (i:number, width:number) => width / 2 + cos(i) * config.offset * width;

export const sin = (i:number) => Math.sin((i + config.rotation) * Math.PI / 6);
export const cos = (i:number) => Math.cos((i + config.rotation) * Math.PI / 6);

const resonance1Mult = 1.000; //  2 zones x 6
const resonance2Mult = 0.500; //  4 zones x 3
const resonance3Mult = 0.333; //  6 zones x 2
const resonance4Mult = 0.167; // 12 zones x 1
const multTotal = resonance1Mult + resonance2Mult + resonance3Mult + resonance4Mult;

export const resonance = (i1:number, i2:number) => {
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

export const color = (col:IColor, i1:number, i2:number) => {
    let dot = resonance(i1, i2);
    dot = Math.abs(dot);

    return `rgba(${col.r}, ${col.g}, ${col.b}, ${dot})`;
}
