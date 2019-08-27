import { faGithubAlt, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sortBy } from 'atp-pointfree';
import * as React from 'react';
import { Link } from 'react-router-dom';
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

    const chunkedPages = chunk(10)(
        config.pages
            .filter((page:IPage) => page.listed)
            .sort(sortBy("published"))
            .reverse()
    );

    return <div id="sidebar" className={expanded ? "expanded" : undefined} onClick={expand(false)} >
        <div id="handle"><div onClick={expand(true)}/></div>
        <div id="sidebar-header">
            <Link to="/">{config.site.tagLine}</Link>
        </div>
        <div id="sidebar-brands">
            <a href="https://www.linkedin.com/in/andrewwittrock/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://twitter.com/DaemonAlchemist"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://github.com/DaemonAlchemist"><FontAwesomeIcon icon={faGithubAlt} /></a>
        </div>
        <h2>Links</h2>
        <ul>
            {config.menu.links.map((link:ILink) =>
                <MenuLink key={link.url} to={link.url}>
                    <link.Component />
                </MenuLink>
            )}
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
