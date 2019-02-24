import { Layout, Menu } from 'antd';
import * as React from 'react';
// import { Route } from 'react-router';
import { ReduxContainer } from "simple-redux-container";
import './App.css';

export const App = () => 
  <ReduxContainer reducers={{}}>
    <Layout>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>APP NAME GOES HERE</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content>
        Routes and page content goes here.
      </Layout.Content>
    </Layout>
  </ReduxContainer>;

export default App;
