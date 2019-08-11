import * as React from 'react';
import {Link} from 'react-router-dom';

export const PageComponent = (props:IPageProps) =>
    <>
        <h1 className="stuck top">{props.title}</h1>
        <div className="top shadow" />
        {React.Children.map(props.preview ? props.children.slice(0, props.preview) : props.children, a => a)}
        <div style={{clear: "both"}} />
        <div className="stuck bottom" style={{position: "sticky", bottom: 0, borderTop: "solid 1px", background: "#ffffff", zIndex: 999}}>
            {!!props.published && <>Published {props.published}</>}
            {!!props.updated && <>, last edited {props.updated}</>}
            <br />
            {!!props.tags.length && 
                <>
                    Tags: {props.tags.map((tag:Tag, index:number) =>
                        <>
                            {index > 0 && <>, </>}<Link key={tag} to={`/tags/${tag}`}>{tag}</Link>
                        </>
                    )}
                </>
            }
            {!props.tags.length && <br />}
        </div>
        <div className="bottom shadow" />
    </>;
