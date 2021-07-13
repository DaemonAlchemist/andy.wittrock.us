///<reference path="./config.d.ts" />
import * as React from 'react';
import { gravity } from '../../components/Pages/Gravity';
import { homepage } from "../../components/Pages/Homepage";
import { magic } from '../../components/Pages/Magic';
import { minecraftToMaxConverter } from '../../components/Pages/MinecraftToMaxConverter';
import { minecraftToMaxPart2 } from '../../components/Pages/MinecraftToMaxPart_2';
import { minecraftToMaxPart3 } from '../../components/Pages/MinecraftToMaxPart_3';
import { prematureOptimization } from '../../components/Pages/PrematureOptimization';
import { proceduralLandscapes } from '../../components/Pages/ProceduralLandscapes';
import { projects } from "../../components/Pages/Projects";
import { reduxVsUnstateless } from '../../components/Pages/ReduxVsUnstateless';
import { resume } from "../../components/Pages/Resume";
import { wormholes } from '../../components/Pages/Wormholes';

export const config:IConfig = {
    menu: {
        links: [
            {Component: () => <>Résumé</>, url: "/resume"},
            {Component: () => <>Projects</>, url: "/projects"},
        ],
        pageCount:5,
        pageSpread:1,
        tags: ["Minecraft", "C++", "Front End", "3D Graphics", "Algorithms", "Procedural Content", "Utilities", "Physics", "Writing"]
    },
    pages: [
        // HYGEN_PAGE_INJECT
        magic,
        projects,
        homepage,
        minecraftToMaxConverter,
        minecraftToMaxPart2,
        minecraftToMaxPart3,
        gravity,
        proceduralLandscapes,
        prematureOptimization,
        resume,
        wormholes,
        reduxVsUnstateless,
    ],
    site: {
        author: "Andrew Wittrock",
        dateFormat: "dddd, MMMM Do, YYYY",
        source: "https://github.com/DaemonAlchemist/andy.wittrock.us",
        tagLine: "andy.wittrock.us",
        title: "Andrew Wittrock",
        width: "1000px",
    },
};
