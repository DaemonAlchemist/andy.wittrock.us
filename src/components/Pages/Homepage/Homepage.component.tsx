import * as React from 'react';
import { PageList } from "../../PageList";

const HomepageComponent = () =>
    <PageList />;

export const homepage:IPage = {
    Component: HomepageComponent,
    listed: false,
    published: "",
    tags: [],
    title: "andy.wittrock.us",
    updated: "",            
    url: "/",
};
