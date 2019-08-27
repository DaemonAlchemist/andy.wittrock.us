///<reference path="./config.d.ts" />
import * as React from 'react';
import { gravity } from '../../components/Pages/Gravity';
import { homepage } from "../../components/Pages/Homepage";
import { minecraftToMaxConverter } from '../../components/Pages/MinecraftToMaxConverter';
import { minecraftToMaxPart2 } from '../../components/Pages/MinecraftToMaxPart_2';
import { minecraftToMaxPart3 } from '../../components/Pages/MinecraftToMaxPart_3';
import { prematureOptimization } from '../../components/Pages/PrematureOptimization';
import { proceduralLandscapes } from '../../components/Pages/ProceduralLandscapes';
import { resume } from "../../components/Pages/Resume";

export const config:IConfig = {
    menu: {
        links: [
            {Component: () => <>Résumé</>, url: "/resume"}
        ],
        tags: ["Minecraft", "C++", "Front End", "3D Graphics", "Algorithms", "Procedural Content", "Utilities"]
    },
    pages: [
        // HYGEN_PAGE_INJECT
        homepage,
        minecraftToMaxConverter,
        minecraftToMaxPart2,
        minecraftToMaxPart3,
        gravity,
        proceduralLandscapes,
        prematureOptimization,
        resume,
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
