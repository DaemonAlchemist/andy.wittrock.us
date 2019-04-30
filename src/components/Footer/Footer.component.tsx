import * as React from 'react';
import { config } from "../../libs/config";

export const Footer = (props:IFooterProps) =>
    <p style={{textAlign: "center"}}>
        Content &copy; Andrew Wittrock, all rights reserved<br/>
        <a href={config.site.source}>website source</a> available under the <a href="https://opensource.org/licenses/MIT">MIT License</a>
    </p>;
