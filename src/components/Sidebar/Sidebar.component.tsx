import * as React from 'react';
import { config } from "../../libs/config";
import { MenuLink } from '../MenuLink';
import "./Sidebar.css";

export const Sidebar = (props:ISidebarProps) =>
    <div id="sidebar">
        <h2>Links</h2>
        <ul>
            <MenuLink to="/">{config.site.tagLine}</MenuLink>
        </ul>
        <h2>Pages</h2>
        <ul>
            {config.pages.map((page:IPage) =>
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
