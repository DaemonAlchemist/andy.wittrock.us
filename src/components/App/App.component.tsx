import { Layout, Menu } from 'antd';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import { config } from "../../libs/config";
import './App.css';

const history = createBrowserHistory();

const goTo = (url:string) => () => {
  history.push(url);
};

const redirectTo = (url:string) => () => {
  location.href = url;
};

export const App = () => 
  <DocumentTitle title={config.site.title}>
    <Router history={history}>
      <Layout style={{maxWidth: config.site.width, margin: "auto", position: "relative"}}>
        <Layout.Header style={{position: "fixed", top: 0, width: "100%", maxWidth: config.site.width, zIndex: 999}}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item onClick={goTo('/')}>andy.wittrock.us</Menu.Item>
            {config.menu.tags.map((tag:Tag) => 
              <Menu.Item key={tag} onClick={goTo(`/tags/${tag}`)}>{tag}</Menu.Item>
            )}
            <Menu.Item onClick={goTo('/resume')} style={{float: "right"}}>Résumé</Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content style={{marginTop: "46px", padding: "8px"}}>
          {config.pages.map((page:IPage) =>
            <Route key={page.url} path={page.url} component={page.component} />
          )}
        </Layout.Content>
        <Layout.Header style={{position: "fixed", bottom: 0, width: "100%", maxWidth: config.site.width}}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item onClick={redirectTo(config.site.source)} style={{float: "right"}}>
              &lt;source&gt;
            </Menu.Item>
          </Menu>
        </Layout.Header>
      </Layout>
    </Router>
  </DocumentTitle>;

export default App;
