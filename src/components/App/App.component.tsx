import { createBrowserHistory } from 'history';
import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import { config } from "../../libs/config";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Page } from "../Page";
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
        <Header />
        {config.pages.map((page:IPage) =>
          <Route key={page.url} path={page.url} component={fullPage(page)} />
        )}
        <Footer />
      </>
    </Router>
  </DocumentTitle>;

export default App;
