import { Layout, Menu } from 'antd';
import * as React from 'react';
import { config } from "../../libs/config";
import { MenuLink } from '../MenuLink';

export const Footer = (props:IFooterProps) =>
    <Layout.Header style={{position: "fixed", bottom: 0, width: "100%", maxWidth: config.site.width}}>
        <Menu theme="dark" mode="horizontal">
            <MenuLink raw to={config.site.source} style={{float: "right"}}>
                &lt;source&gt;
            </MenuLink>
        </Menu>
    </Layout.Header>;
