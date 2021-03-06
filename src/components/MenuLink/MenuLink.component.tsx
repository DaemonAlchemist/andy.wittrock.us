import * as React from 'react';
import { Link } from 'react-router-dom';
import "./MenuLink.less";

export const MenuLink = (props:IMenuLinkProps) =>
    <li className={props.className} style={props.style}>
        {!props.raw
            ? <Link to={props.to}>
                {React.Children.map(props.children, a=>a)}
              </Link>
            : <a href={props.to}>
                {React.Children.map(props.children, a=>a)}
              </a>
        }
    </li>;
