import { Col, Row } from 'antd';
import * as React from 'react';
import {Link} from 'react-router-dom';

export const PageComponent = (props:IPageProps) =>
    <>
        <Row>
            <Col>
                <h1 style={{fontSize: "48px"}}>{props.title}</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                {React.Children.map(props.children, a => a)}
            </Col>
        </Row>
        <Row>
            <Col style={{textAlign: "right", fontStyle: "italic", marginBottom: "48px"}}>
                Published {props.published}
                {!!props.updated && <>, last edited {props.updated}</>}
                <br />
                {!!props.tags && 
                    <>
                        Tags: {props.tags.map((tag:Tag) => 
                            <Link key={tag} to={`/tags/${tag}`}>{tag}</Link>
                        )}
                    </>
                }
            </Col>
        </Row>
    </>;
