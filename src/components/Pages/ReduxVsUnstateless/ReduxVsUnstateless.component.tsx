import * as React from 'react';
import { CodeBlock } from 'src/components/CodeBlock';
import { DropCap } from "../../DropCap";

const ReduxVsUnstatelessComponent = (props:IPageComponentProps) =>
    <>
        <p><DropCap preview={props.preview}>R</DropCap>ecently, I wrote <a href="https://www.npmjs.com/package/unstateless">Unstateless</a>, a state management library for React.  This library grew out of another project where I was doing something "clever" with <a href="https://redux.js.org/">Redux</a>.  That "cleverness" meant that I needed an alternate method for storing some shared state.  I cobbled something together that worked and refined it as the project went on.  Once it reached a sufficiently well-defined state, I extracted it into a separate package.</p>
        
        <p>One key feature of Unstateless is a drastic reduction in boilerplate coding as compared to other libraries such as Redux.  As a demonstration, let's convert a local state variable into a global state variable using both Redux and Unstateless.</p>

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

            <p>This is a pretty basic component, but demonstrates how React hooks can be used to store local state.  Now let's say that you want to share this username with other components.  First, we'll try with Redux.</p>

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

            <p>Next, we'll need to write the react-redux boilerplate to connect our original component to the Redux data store:</p>

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

            <p>And lastly, if this is our first use of Redux in a project, we'll need to add the Redux provider boilerplate to our top-level app component:</p>

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

            <p>And that's it.  No boilerplate code.  No top-level context providers.  We just converted the useState React hook into a useSharedState hook from Unstateless.  Optionally, if you want your components to be completely stateless, you can use the inject and mergeProps functions to inject the state instead:</p>

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

            <p>This is a bit more code than the basic Unstateless example.  However, the code is still all local to the component.  There is no top-level boilerplate code to worry about.</p>

            <p>I've already built one additional project that uses Unstateless for state management, and found it much more intuitive than Redux.  I've also converted some existing components in other projects from Redux to Unstateless, and found noticable performance improvements.  Unstateless still needs more battle-testing, but I've been pleased with it so far.</p>
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
