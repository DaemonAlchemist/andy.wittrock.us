import { faGithubAlt, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sortBy } from 'atp-pointfree';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from "../../libs/config";
import { MenuLink } from '../MenuLink';
import { Paginate } from "../Paginate";
import { Tag } from '../Tag';
import "./Sidebar.less";

export const Sidebar = (props:ISidebarProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const expand = (ex:boolean) => (e:any) => {
        e.stopPropagation();
        setExpanded(ex);
    }

    const pages = config.pages
        .filter((page:IPage) => page.listed)
        .sort(sortBy("published"))
        .reverse();
    const PageLink = ({item}:{item:IPage}) =>
        <MenuLink key={item.url} to={item.url}>
            {item.title}
        </MenuLink>;
    const List = ({children}:{children:any}) => <ul>{React.Children.map(children, a=>a)}</ul>;

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
        <Paginate
            bottom
            data={pages}
            pageSize={config.menu.pageCount}
            pageSpread={config.menu.pageSpread}
            Component={PageLink}
            Wrapper={List}
        />
        <h2>Tags</h2>
        <ul>
            {config.menu.tags.sort().map((tag:Tag) => 
                <Tag key={tag} tag={tag} />
            )}
        </ul>
    </div>;
}
