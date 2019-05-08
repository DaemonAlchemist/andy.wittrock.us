///<reference path="./config.d.ts" />

import {resume} from '../../components/Pages/Resume';
import { testPage } from '../../components/Pages/TestPage';

export const config:IConfig = {
    menu: {
        tags: ["Front End", "3D Graphics", "Algorithms", "Procedural Content", "Utilities"]
    },
    pages: [
        // HYGEN_PAGE_INJECT
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
