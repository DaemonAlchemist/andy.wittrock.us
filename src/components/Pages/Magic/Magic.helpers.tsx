import * as React from 'react';
import { debug, flatten, range, switchOn } from 'ts-functional';
import { Affinities, IColor, IDimension, IKingdom, Transition } from './Magic.d';

// Orbital Notes



// --- BEGIN CONFIG -- //

export const colors:IKingdom[] = [
    {name: "Red",        kingdom: "",         affinities: [1, 2, 2, 4], color: "#ff0000", stroke: "#880000"},
    {name: "Vermillion", kingdom: "",         affinities: [1, 2, 4, 2], color: "#ff4400", stroke: "#882200"},
    {name: "Orange",     kingdom: "",         affinities: [1, 4, 2, 2], color: "#ff8800", stroke: "#884400"},
    {name: "Amber",      kingdom: "",         affinities: [2, 1, 2, 4], color: "#ffbb00", stroke: "#886600"},
    {name: "Yellow",     kingdom: "",         affinities: [2, 1, 4, 2], color: "#ffff00", stroke: "#888800"},
    {name: "Chartreuse", kingdom: "",         affinities: [2, 2, 1, 4], color: "#88ff00", stroke: "#448800"},
    {name: "Green",      kingdom: "",         affinities: [2, 2, 4, 1], color: "#00ff00", stroke: "#008800"},
    {name: "Teal",       kingdom: "",         affinities: [2, 4, 1, 2], color: "#00ffff", stroke: "#008888"},
    {name: "Blue",       kingdom: "Nidera",   affinities: [2, 4, 2, 1], color: "#0000ff", stroke: "#000088"},
    {name: "Violet",     kingdom: "",         affinities: [4, 1, 2, 2], color: "#4400ff", stroke: "#220088"},
    {name: "Purple",     kingdom: "",         affinities: [4, 2, 1, 2], color: "#8800ff", stroke: "#440088"},
    {name: "Magenta",    kingdom: "Saragosa", affinities: [4, 2, 2, 1], color: "#ff00ff", stroke: "#880088"},
];

/* New theory:
    - 4 dimensions of 3 orthogonal axes
    - Kingdom affinities (1, 2, or 3) determine how many axes in a dimension can be used in a single spell
    - An Ashtar power level has two parts: A/B
        - A indicating how many dimensions they have access to.
        - B indicating how many dimensions they can utilize in a single spell
        - 1/1, 2/1, 2/2, 3/1, 3/2, 3/3, 4/1, 4/2, 4/3, 4/4
*/
// Energy Actions:    diffract,  reflect,    scatter,  focus, emit,      absorb
// Substance Actions: create,    destroy,    find,     hide,  push,      pull
// Soul Actions:      connect,   disconnect, heal,     harm,  influence, free
// Thought Actions:   read, influence, know, forget, 

// -------------------------------------------

// Matter Dimension: perform an action on a physical objectt
// Types:   water,     air,     earth,    fire,       animal,      plant,       mineral,    void
// Actions: create,    destroy, maintain, find,       lift,        push,        pull,       hide

// Energy Dimension: perform an action on an energy attribute
// Types:   frequency, density, power,    charge,     velocity,    location,    viscosity, 
// Actions: diffract,  reflect, scatter,  focus,      emit,       absorb

// Thought Dimension
// Types:   memories,  desires, emotions, intentions, fears,       connections, sensations, actions
// Actions: sense,     stop,    start,    control,    hide,        create,      destroy,    maintain

// 

// action, reaction, amplitude, balance, force, frequency, catalyst, bond, cold, heat, energy,
// compound, atomic, mass, conservation, creation, destruction, decompose, density, diffract, reflect, absorb, scatter, focus,
// concentrate, dilute, entropy, power, erode, torque, evaporate, freeze, thaw, condense, friction, gravity, lift, thrust,
// drag, ice, water, earth, lava, plasma, gas, air, fire, space, time, void, past, present, future, inertia, light, darkness,
// motion, neutral, positive, negative, particle, wave, precipitate, pressure, recessive, dominant, 
// transition, metal, vapor, vibration, viscosity, vortex, wave, wedge, wheel, wind, Acid, Alkali, allele, cycle
// speed, velocity, acceleration, location, annihilate, 

// Dimension verbs:  transform, combine, difference, add, amplify

// Elements: water/fire, air/earth, space/time void/energy


// States: solid, liquid, gas, plasma,
// States of energy:  potential, kinetic, life, death, static, moving, 
// Transitions: evaporate, freeze, thaw, melt, condense, precipitate, dilute, concentrate, create, destroy, decompose, diffract
// Attributes: speed, velocity, acceleration, location, torque, viscosity
// Abstract things: vortex, wave, particle


export const dimensions:IDimension[] = [
    {name: "Dim1", values: ["D1V1", "D1V2", "D1V3", "D1V4", "D1V5", "D1V6", "D1V7", "D1V8"]},
    {name: "Dim2", values: ["D2V1", "D2V2", "D2V3", "D2V4", "D2V5", "D2V6", "D2V7", "D2V8"]},
    {name: "Dim3", values: ["D3V1", "D3V2", "D3V3", "D3V4", "D3V5", "D3V6", "D3V7", "D3V8"]},
    {name: "Dim4", values: ["D4V1", "D4V2", "D4V3", "D4V4", "D4V5", "D4V6", "D4V7", "D4V8"]},
];

export const transitionDescription = (start:string, end:string):JSX.Element | string | undefined => switchOn<JSX.Element | string>(`${start} -> ${end}`, {
    "D1V1 -> D1V2": () => "Custom description",
    default: () => <em>No description yet</em>,
});

const transition = (d:IDimension, o:number) => (s:number):Transition[] =>flatten(debug(range(1, o)).map((i):Transition[] => i !== 4
    ? [
        [d.values[s], d.values[(s - i + d.values.length) % d.values.length]],
        [d.values[s], d.values[(s + i + d.values.length) % d.values.length]]
    ]
    : [
        [d.values[s], d.values[(s - i + d.values.length) % d.values.length]],
    ]
));

export const transitions = (d:IDimension, o:number):Transition[] => flatten(
    Object.keys(d.values)
        .map((s:string):number => parseInt(s, 10))
        .map(transition(d, o))
);

export const baseTransitions = (a:Affinities):Transition[][] => a.map((aff:number, d) => transitions(dimensions[d], aff));

export const cross = (values1:string[][], values2:string[][]):string[][] => flatten(
    values1.map((vals1:string[]) => values2.map((vals2:string[]) => [...vals1, ...vals2]))
);

export const harmonicValues = [
    ["Increase", "Pull",    "Confront", "Decrease", "Push", "Avoid"],
    // ["Water", "Earth", "Fire", "Wind", "Light", "Darkness"],

    // ["Water", "Earth", "Fire", "Air", "Space", "Time"],
    // ["Lift", "Gravity", "Thrust", "Drag", "Normal", "Shear"],

    // ["Water",    "Earth",   "Fire",     "Wind"],
    // ["War", "Famine", "Pestilence", "Death"],
    // ["Peace", "Bountifulness", "Health", "Life"],
    // ["Knowledge", "Power", "Organization", "Perseverence"],
    ["Learn", "Control", "Organize", "Build"],
    // ["Form", "Purpose", "Material", "Agent"],
    // ["Lift", "Gravity", "Thrust", "Drag"],
    
    // ["Mind",     "Body",    "Spirit"],
    ["Create",   "Destroy", "Maintain"],
    // ["Compassion", "Simplicity", "Humility"],
    // ["Id", "Ego", "Superego"],
    // ["Thoughts", "Words", "Deeds"],
    // ["Thought", "Emotion", "Movement"],
    // ["Past" "Present" "Future"],
    // ["Life", "Death", "Rebirth"],
    
    // ["Order",    "Chaos"],
    // ["Life", "Death"],
    ["Grow", "Decay"],
    // ["Existence", "Void"],
    // ["Space", "Time"],
    // ["Material", "Spiritual"],
    // ["Near", "Far"],
    
    ["Life"],
];

export const harmonics = [
    {level: 1, name: "Element",   width:5, offsets: [6],                                 color: {r:255, g:  0, b:  0}},
    {level: 2, name: "Affinity",     width:4, offsets: [4, -4],                             color: {r:  0, g:255, b:  0}},
    {level: 3, name: "Essence",   width:3, offsets: [3, -3, -6],                         color: {r:  0, g:  0, b:255}},
    {level: 4, name: "Alignment",    width:2, offsets: [2, 4, 6, -2, -4],                   color: {r:255, g:255, b:  0}},
    {level: 5, name: "Energy",      width:1, offsets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], color: {r:255, g:  0, b:255}},
]

export const config = {
    lineWidth: 4,
    offset: 0.4,
    radius: 36,
    rotation: 1,
}

// --- END CONFIG -- //

export const getHarmonicValue = (offset:number, harmonic:number) => harmonicValues[harmonic][offset % harmonicValues[harmonic].length];

// On screen location of circle centers
export const x = (i:number, width:number) => width / 2 + sin(i) * config.offset * width;
export const y = (i:number, width:number) => width / 2 + cos(i) * config.offset * width;

// Sine and cosine functions based on circle offset
export const sin = (i:number) => Math.sin((i + config.rotation) * Math.PI / 6);
export const cos = (i:number) => Math.cos((i + config.rotation) * Math.PI / 6);

const resonance1Mult = 0.167; //  2 zones x 6
const resonance2Mult = 0.333; //  4 zones x 3
const resonance3Mult = 0.500; //  6 zones x 2
const resonance4Mult = 1.000; // 12 zones x 1
const multTotal = resonance1Mult + resonance2Mult + resonance3Mult + resonance4Mult;

// Total resonance between two colors
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

    

// Connection color between two circles
export const color = (col:IColor, i1:number, i2:number) => {
    let dot = resonance(i1, i2);
    dot = Math.abs(dot);

    return `rgba(${col.r}, ${col.g}, ${col.b}, ${dot})`;
}
