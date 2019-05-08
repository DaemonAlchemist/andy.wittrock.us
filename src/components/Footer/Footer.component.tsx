import * as React from 'react';
import { config } from "../../libs/config";

export const Footer = (props:IFooterProps) =>
    <p style={{textAlign: "center"}}>
        Content &copy; {config.site.author}, all rights reserved<br/>
        <a href={config.site.source}>website source</a> available under the <a href="https://opensource.org/licenses/MIT">MIT License</a>
    </p>;
