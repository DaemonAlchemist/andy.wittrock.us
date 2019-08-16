import { sortBy } from 'atp-pointfree';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../libs/config';

const intersects = <T extends {}>(a:T[], b:T[]):boolean => a.reduce((cur:boolean, aObj:T):boolean => cur && b.includes(aObj), true);

export const PageList = (props:IPageListProps) =>
    <div className="homepage">
        {config.pages
            .filter((page:IPage) => page.url !== '/')  // Note: never include homepage in page list
            .filter((page:IPage) => !props.tags || intersects(props.tags, page.tags))
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
