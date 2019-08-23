import { sortBy } from 'atp-pointfree';
import * as React from 'react';
import { chunk } from 'ts-functional';
import { config } from "../../libs/config";
import { MenuLink } from '../MenuLink';
import { Paginator } from '../Paginator';
import { Tag } from '../Tag';
import "./Sidebar.less";

export const Sidebar = (props:ISidebarProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const expand = (ex:boolean) => (e:any) => {
        e.stopPropagation();
        setExpanded(ex);
    }

    const [curPage, setCurPage] = React.useState(0);

    const chunkedPages = chunk(10)(config.pages.sort(sortBy("published")).reverse());

    return <div id="sidebar" className={expanded ? "expanded" : undefined} onClick={expand(false)} >
        <div id="handle"><div onClick={expand(true)}/></div>
        <h2>Links</h2>
        <ul>
            <MenuLink to="/">{config.site.tagLine}</MenuLink>
        </ul>
        <h2>Pages</h2>
        <ul>
            {chunkedPages[curPage].map((page:IPage) =>
                <MenuLink key={page.url} to={page.url}>
                    {page.title}
                </MenuLink>
            )}
            <Paginator
                pageCount={chunkedPages.length}
                curPage={curPage}
                onClick={setCurPage}
                pageSpread={1}
            />
        </ul>
        <h2>Tags</h2>
        <ul>
            {config.menu.tags.sort().map((tag:Tag) => 
                <Tag key={tag} tag={tag} />
            )}
        </ul>
    </div>;
}
