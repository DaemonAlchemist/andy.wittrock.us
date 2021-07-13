import * as React from 'react';
import { CodeBlock } from 'src/components/CodeBlock';
import { DropCap } from "../../DropCap";

const ReduxVsUnstatelessComponent = (props:IPageComponentProps) =>
    <>
        <p><DropCap preview={props.preview}>R</DropCap>ecently, I wrote <a href="https://www.npmjs.com/package/unstateless">Unstateless</a>, a new state management library for React as an alternative to other libraries such as <a href="https://redux.js.org/">Redux</a>.  This library grew out of another project where I was doing something "clever" with Redux.  That "cleverness" meant that I needed a non-Redux method for storing some shared state.  I cobbled something together that worked, and once it reached a sufficiently stable state, I extracted it into a separate package.</p>
        
        <p>One key feature of Unstateless that makes it nice to use instead of Redux is a drastic reduction in boilerplate coding.  As a demonstration, here is an example of how much time and effort can be saved by using Unstateless rather than Redux.</p>

        {!props.preview && <>
            <h2>Original Code</h2>

            <p>Let's say you have a React component that displays a username, and provides a button to change it to something else:</p>

            <CodeBlock>{
`// SomeComponent.tsx
import React from 'react';

export const SomeComponent = (props:any) => {
    const [userName, setUserName] = React.useState<string>("");
    
    return <>
        {userName}
        <button onClick={() => {setUserName("A New Name")}>Click!</button>
    </>;
}`
            }</CodeBlock>

            <p>This is a pretty basic component, but demonstrates the usual way of storing local state using React hooks.  Now let's say that you want to hoist this username into a global state so that it's available to other components.  First, we'll do it with Redux.</p>

            <h2>Redux</h2>

            <p>Redux uses the concepts of reducers, actions, and selectors to manage global state.  For our shared username, we'll need to implement these functions:</p>

            <CodeBlock>{
`export interface IUserNameAction {
    type: string;
    userName: string;
}

export interface IUserNameContainer {
    userName: string;
}

// Reducer
export const userNameReducer = (state:string, action:IUserNameAction):string =>
    action.type === "USERNAME_UPDATE"
        ? action.userName
        : state || "";

// Selector
export const getUserName = (state:IUserNameContainer):string => state.userName;

// Action creator
export const updateUserName = (userName:string):IUserNameAction =>
    ({type: "USERNAME_UPDATE", userName});`
            }</CodeBlock>

            <p>Next, we'll need to write the react-redux boilerplate that allows us to connect our component to the Redux data store:</p>

            <CodeBlock>{
`import {getUserName, updateUserName} from "username-redux";
import { connect } from 'react-redux';
import {SomeComp} from "SomeComponent.component.tsx";

const mapStateToProps = (state:any, props:any) => ({
    userName: getUserName(state),
});

const mapDispatchToProps = (dispatch:any, props:any) => ({
    updateUserName: (newName:string) => {
        dispatch(updateUserName(newName);
    }
});

// This is our original component, updated to use the connected Redux props
const SomeComp = (props:any) => <>
    {props.userName}
    <button onClick={() => {props.updateUserName("A New Name")}>Click!</button>
</>;

export const SomeComponent = connect(mapStateToProps, mapDispatchToProps)(SomeComp);
`
            }</CodeBlock>

            <p>And lastly, if this is our first use of Redux in a project, we'll need to add the Redux provider boilerplate to our top-level component:</p>

            <CodeBlock>{
`// App.tsx
...
import { ..., combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { userNameReducer} from 'username-redux';
...

const reducers = {
    ...,
    userName: userNameReducer,
    ...,
};

const store = createStore(
    combineReducers(reducers),
    ...,
);

export const App = () => <>
    <Provider store={store}>
        ...
    </Provider>
</>;
`
            }</CodeBlock>

            <p>Fortunately, this last bit only needs to be done once per project.  However, whenever a new reducer is defined, it will need to be added here as well.</p>

            <p>That's quite a lot of code just to hoist a local variable into a shared variable.  Next, we'll try it with Unstateless.</p>

            <h2>Unstateless</h2>

            <CodeBlock>{
`import {useSharedState} from "unstateless";
	
export const SomeComponent = (props:any) => {
    const [userName, setUserName] = useSharedState<string>("userName", "");
    
    return <>
        {userName}
        <button onClick={() => {setUserName("A New Name")}>Click!</button>
    </>;
}`
            }</CodeBlock>

            <p>And that's it.  The only thing we needed to do is convert the standard useState React hook into a useSharedState hook from Unstateless.  Optionally, if you want your components to be completely stateless, you can use the inject and mergeProps functions to inject the state instead:</p>

            <CodeBlock>{
`import {inject, mergeProps, useSharedState} from "unstateless";
	
interface IUserNameProps {
    userName: string;
    setUserName: (val:string | (val:string) => string) => void;
}

const injectUserName = <T>(props:T):T & IUserNameProps => {
    const [userName, setUserName] = useSharedState<string>("userName", "");
    
    return {...props, userName, setUserName};
}

const SomeComp = (props:any) => <>
    {props.userName}
    <button onClick={() => {props.setUserName("A New Name")}>Click!</button>
</>;

const connect = inject(mergeProps(injectUserName));

export const SomeComponent = connect(SomeComp);
`
            }</CodeBlock>

            <p>This is a bit more code than the basic Unstateless example, but the big advantage here is that the code is still all local to the component.  There is no top-level boilerplate in the App, which allows you to use Unstateless seemlessly in any React app.</p>
        </>}
    </>;

export const reduxVsUnstateless:IPage = {
    Component: ReduxVsUnstatelessComponent,
    listed: true,
    published: "2021-07-12",
    tags: [],
    title: "Redux vs. Unstateless",
    updated: "",            
    url: "/redux-vs-unstateless",
};
