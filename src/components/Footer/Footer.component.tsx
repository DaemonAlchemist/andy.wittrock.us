import * as React from 'react';
import { config } from "../../libs/config";
import "./Footer.less";

export const Footer = (props:IFooterProps) =>
    <div id="footer">
        Content &copy; {config.site.author}, all rights reserved<br/>
        <a href={config.site.source}>website source</a>
    </div>;
