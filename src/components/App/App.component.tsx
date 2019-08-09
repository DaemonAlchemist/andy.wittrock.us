import { createBrowserHistory } from 'history';
import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import { config } from "../../libs/config";
import { Footer } from "../Footer";
import { Page } from "../Page";
import { Sidebar } from "../Sidebar";
import './App.css';

const history = createBrowserHistory();

const fullPage = (page:IPage) => () =>
  <Page {...page}>
    <page.Component />
  </Page>;

export const App = () => 
  <DocumentTitle title={config.site.title}>
    <Router history={history}>
      <>
        <Sidebar />
        {config.pages.map((page:IPage) =>
          <Route key={page.url} path={page.url} exact component={fullPage(page)} />
        )}
        <Footer />
      </>
    </Router>
  </DocumentTitle>;

export default App;
