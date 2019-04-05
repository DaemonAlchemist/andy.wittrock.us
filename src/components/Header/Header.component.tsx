import { Layout, Menu } from 'antd';
import * as React from 'react';
import { config } from "../../libs/config";
import { MenuLink } from '../MenuLink';

export const Header = (props:IHeaderProps) =>
    <Layout.Header style={{position: "fixed", top: 0, width: "100%", maxWidth: config.site.width, zIndex: 999}}>
        <Menu theme="dark" mode="horizontal">
            <MenuLink to={'/'}>{config.site.tagLine}</MenuLink>
            {config.menu.tags.map((tag:Tag) => 
                <MenuLink key={tag} to={`/tags/${tag}`}>{tag}</MenuLink>
            )}
            <MenuLink to={'/resume'} style={{float: "right"}}>Résumé</MenuLink>
        </Menu>
    </Layout.Header>;
