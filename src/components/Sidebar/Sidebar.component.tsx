import { sortBy } from 'atp-pointfree';
import * as React from 'react';
import { config } from "../../libs/config";
import { MenuLink } from '../MenuLink';
import "./Sidebar.less";

export const Sidebar = (props:ISidebarProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const expand = (ex:boolean) => (e:any) => {
        e.stopPropagation();
        setExpanded(ex);
    }

    return <div id="sidebar" className={expanded ? "expanded" : undefined} onClick={expand(false)} >
        <div id="handle"><div onClick={expand(true)}/></div>
        <h2>Links</h2>
        <ul>
            <MenuLink to="/">{config.site.tagLine}</MenuLink>
        </ul>
        <h2>Pages</h2>
        <ul>
            {config.pages.sort(sortBy("published")).reverse().map((page:IPage) =>
                <MenuLink key={page.url} to={page.url}>
                    {page.title}
                </MenuLink>
            )}
        </ul>
        <h2>Tags</h2>
        <ul>
            {config.menu.tags.map((tag:Tag) => 
                <MenuLink key={tag} to={`/tags/${tag}`}>
                    {tag}
                </MenuLink>
            )}
        </ul>
    </div>;
}
