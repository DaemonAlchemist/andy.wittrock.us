export declare interface IColor {
    r:number;
    g:number;
    b:number;
}

export declare interface IKingdom {
    name: string;
    kingdom: string;
    affinities: Affinities;
    color: string;
    stroke: string;
}

export declare type Transition = [string, string];
export declare type Spell = [Transition?, Transition?, Transition?, Transition?];
export declare type Affinities = [number, number, number, number];
export declare interface IDimension {
    name: string;
    values: [string, string, string, string, string, string, string, string];
}
