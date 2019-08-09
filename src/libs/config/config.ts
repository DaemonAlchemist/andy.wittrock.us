///<reference path="./config.d.ts" />

import { gravity } from '../../components/Pages/Gravity';
import { minecraftToMaxPart3 } from '../../components/Pages/MinecraftToMaxPart_3';
import { prematureOptimization } from '../../components/Pages/PrematureOptimization';
import { proceduralLandscapes } from '../../components/Pages/ProceduralLandscapes';
import { resume } from '../../components/Pages/Resume';
import { testPage } from '../../components/Pages/TestPage';

export const config:IConfig = {
    menu: {
        tags: ["Front End", "3D Graphics", "Algorithms", "Procedural Content", "Utilities"]
    },
    pages: [
        // HYGEN_PAGE_INJECT
        minecraftToMaxPart3,
        gravity,
        proceduralLandscapes,
        prematureOptimization,
        resume,
        testPage,
    ],
    site: {
        author: "Andrew Wittrock",
        source: "https://github.com/DaemonAlchemist/andy.wittrock.us",
        tagLine: "andy.wittrock.us",
        title: "Andrew Wittrock",
        width: "1000px",
    },
};
