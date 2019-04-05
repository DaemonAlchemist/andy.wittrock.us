///<reference path="./config.d.ts" />

import { testPage } from '../../components/Pages/TestPage';

export const config:IConfig = {
    menu: {
        tags: ["Front End", "3D Graphics", "Algorithms", "Procedural Content", "Utilities"]
    },
    pages: [
        // HYGEN_PAGE_INJECT
        testPage,
    ],
    site: {
        source: "https://github.com/DaemonAlchemist/andy.wittrock.us",
        tagLine: "andy.wittrock.us",
        title: "Andrew Wittrock",
        width: "1000px",
    },
};
