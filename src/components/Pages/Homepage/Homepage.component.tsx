import { sortBy } from 'atp-pointfree';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../../libs/config';

const HomepageComponent = () =>
    <div className="homepage">
        {config.pages
            .filter((page:IPage) => page.url !== '/')
            .sort(sortBy("published"))
            .reverse()
            .map((page:IPage) => 
                <div key={page.url}>
                    <h2><Link to={page.url}>{page.title}</Link></h2>
                    <div><i>Published {page.published}</i></div>
                    <page.Component preview />
                    <div style={{textAlign: "right"}}>
                        <Link to={page.url}>...read more</Link>
                    </div>
                    <div style={{height: "64px"}} />
                </div>
            )
        }
    </div>;

export const homepage:IPage = {
    Component: HomepageComponent,
    published: "2009-01-01",
    tags: [],
    title: "andy.wittrock.us",
    updated: "",            
    url: "/",
};
