import { Layout, Menu } from 'antd';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import { TestPage } from '../Pages';
import './App.css';

const config ={
  siteWidth: "1000px",
}

const pages:IPage[] = [
  {url: "/test-page", component: TestPage}
];

const history = createBrowserHistory();

export const App = () => 
  <DocumentTitle title="Andrew Wittrock">
    <Router history={history}>
      <Layout style={{maxWidth: config.siteWidth, margin: "auto", position: "relative"}}>
        <Layout.Header style={{position: "fixed", top: 0, width: "100%", maxWidth: config.siteWidth, zIndex: 999}}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>andy.wittrock.us</Menu.Item>
            <Menu.Item>Front End</Menu.Item>
            <Menu.Item>3D Graphics</Menu.Item>
            <Menu.Item>Algorithms</Menu.Item>
            <Menu.Item>Procedural Content</Menu.Item>
            <Menu.Item>Utilities</Menu.Item>
            <Menu.Item style={{float: "right"}}>Résumé</Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content style={{marginTop: "46px", padding: "8px"}}>
          {pages.map((page:IPage) =>
            <Route key={page.url} path={page.url} component={page.component} />
          )}
        </Layout.Content>
        <Layout.Header style={{position: "fixed", bottom: 0, width: "100%", maxWidth: config.siteWidth}}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item style={{float: "right"}}>&lt;source&gt;</Menu.Item>
          </Menu>
        </Layout.Header>
      </Layout>
    </Router>
  </DocumentTitle>;

export default App;
