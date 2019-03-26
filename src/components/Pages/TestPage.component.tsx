import * as React from 'react';
import { DropCap } from "../DropCap";
import { Page } from "../Page";

export const TestPageComponent = () =>
    <Page title="Test Page" date={"2019-01-03"}>
        <p><DropCap>L</DropCap>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Page>;
