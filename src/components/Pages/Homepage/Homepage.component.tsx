import { sortBy } from 'atp-pointfree';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../../libs/config';

const HomepageComponent = () =>
    <>
        {config.pages.sort(sortBy("published")).reverse().map((page:IPage) => 
            <div key={page.url}>
                <h2><Link to={page.url}>{page.title}</Link></h2>
            </div>
        )}
    </>;

export const homepage:IPage = {
    Component: HomepageComponent,
    published: "2009-01-01",
    tags: [],
    title: "Homepage",
    updated: "",            
    url: "/",
};
