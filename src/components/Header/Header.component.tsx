import * as React from 'react';
import { config } from "../../libs/config";
import { MenuLink } from '../MenuLink';
import "./Header.css";

export const Header = (props:IHeaderProps) =>
    <>
        <ul className="header">
            <MenuLink to="/">{config.site.tagLine}</MenuLink>
        </ul>
        <ul className="sidebar">
            {config.menu.tags.map((tag:Tag) => 
                <MenuLink key={tag} to={`/tags/${tag}`}>
                    {tag}
                </MenuLink>
            )}
            <MenuLink to="/resume">Résumé</MenuLink>
        </ul>
    </>;
