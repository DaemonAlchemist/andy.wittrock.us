///<reference path="./config.d.ts" />

import { TestPage } from '../../components/Pages';

export const config:IConfig = {
    menu: {
        tags: ["Front End", "3D Graphics", "Algorithms", "Procedural Content", "Utilities"]
    },
    pages: [
        {url: "/test-page", component: TestPage}
    ],
    site: {
        source: "https://github.com/DaemonAlchemist/andy.wittrock.us",
        title: "Andrew Wittrock",
        width: "1000px",
    },
};
