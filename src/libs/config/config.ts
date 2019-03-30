///<reference path="./config.d.ts" />

import { TestPage } from '../../components/Pages';

export const config:IConfig = {
    pages: [
        {url: "/test-page", component: TestPage}
    ],
    site: {
        title: "Andrew Wittrock",
        width: "1000px",
    },
};
