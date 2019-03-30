import { Col, Row } from 'antd';
import * as React from 'react';

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
            </Col>
        </Row>
    </>;
