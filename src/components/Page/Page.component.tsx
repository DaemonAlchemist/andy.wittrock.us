import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
import { config } from "../../libs/config";
import { Date } from "../Date";
import { NavLinks } from '../NavLinks';

export const PageComponent = (props:IPageProps) =>
    <div className="page">
        <DocumentTitle title={`${props.title} - ${config.site.title}`} />
        <div className="left-blocker blocker" />
        <div className="right-blocker blocker" />
        <h1 className="stuck top" title={props.title}>{props.title}</h1>
        <div className="top shadow" />
        {props.listed && <NavLinks page={props} />}
        {React.Children.map(props.preview ? props.children.slice(0, props.preview) : props.children, a => a)}
        {props.listed && <NavLinks page={props} />}
        <div style={{clear: "both"}} />
        <div className="page-footer stuck bottom" style={{position: "sticky", bottom: 0, borderTop: "solid 1px", background: "#ffffff", zIndex: 999}}>
            {!!props.published && <>Published <i><Date date={props.published} /></i></>}
            {!!props.updated && <>, last edited <i><Date date={props.updated} /></i></>}
            <br />
            {!!props.tags.length && 
                <>
                    Tags: {props.tags.map((tag:Tag, index:number) =>
                        <>
                            {index > 0 && <>, </>}<Link key={tag} to={`/tag/${tag}`}>{tag}</Link>
                        </>
                    )}
                </>
            }
            {!props.tags.length && <br />}
        </div>
        <div className="bottom shadow" />
    </div>;
