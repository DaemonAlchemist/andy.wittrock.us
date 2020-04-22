import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Image } from '../Image';
import './ProjectCard.less';

export const ProjectCard = (props:IProjectCardProps) =>
    <div className="project-card">
        {!!props.imageSrc && <Image right src={props.imageSrc} />}
        <h2>{props.title}</h2>
        {!!props.languages && <p><b>Languages: </b> {props.languages.join(", ")}</p>}
        {!!props.technologies && <p><b>Technologies: </b> {props.technologies.join(", ")}</p>}
        <div className="project-content">
            {props.children}
        </div>
        {!!props.url && <div className="project-link">
            <a href={props.url} target="blank">
                visit {props.title}&nbsp;
                <FontAwesomeIcon icon={faSignOutAlt} />
            </a>
        </div>}
        {!!props.sourceCodeUrl && <div className="project-link">
            <a href={props.sourceCodeUrl} target="blank">
                view {props.title} source code&nbsp;
                <FontAwesomeIcon icon={faSignOutAlt} />
            </a>
        </div>}
        <div style={{clear: "both"}} />
    </div>;
