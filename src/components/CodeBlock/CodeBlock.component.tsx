import * as React from 'react';
import Code from 'react-syntax-highlighter';
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ICodeBlockProps } from "./CodeBlock.d";
import './CodeBlock.less';

export const CodeBlock = (props:ICodeBlockProps) =>
    <Code language={props.language || "typescript"} style={a11yDark}>{props.children}</Code>;
