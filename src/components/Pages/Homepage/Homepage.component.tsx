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
                    <page.Component preview />
                    <div style={{display: "grid", gridTemplateColumns: "50% 50%"}}>
                        <div>
                            <i>Published {page.published}</i>
                        </div>
                        <div style={{textAlign: "right"}}>
                            <Link to={page.url}>...continue reading</Link>
                        </div>
                    </div>
                    <hr style={{clear: "both"}}/>
                </div>
            )
        }
    </div>;

export const homepage:IPage = {
    Component: HomepageComponent,
    published: "",
    tags: [],
    title: "andy.wittrock.us",
    updated: "",            
    url: "/",
};
