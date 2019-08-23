import * as React from 'react';
import {MenuLink} from '../MenuLink';

export const Tag = (props:ITagProps) =>
    <MenuLink className="tag" key={props.tag} to={`/tag/${props.tag}`}>
        {props.tag}
    </MenuLink>;
