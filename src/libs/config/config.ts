///<reference path="./config.d.ts" />

import { TestPage } from '../../components/Pages';

export const config:IConfig = {
    menu: {
        tags: ["Front End", "3D Graphics", "Algorithms", "Procedural Content", "Utilities"]
    },
    pages: [
        {
            Component: TestPage,
            page: {
                published: "2019-01-03",
                tags: ["Front End", "Algorithms"],
                title: "Test Page",
                updated: "2019-01-23",            
            },
            url: "/test-page",
        }
    ],
    site: {
        source: "https://github.com/DaemonAlchemist/andy.wittrock.us",
        tagLine: "andy.wittrock.us",
        title: "Andrew Wittrock",
        width: "1000px",
    },
};
