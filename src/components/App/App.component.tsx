import { createBrowserHistory } from 'history';
import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import { config } from "../../libs/config";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";
import { fullPage, ScrollToTop, tagPage } from "./App.helper";
import './App.less';

const history = createBrowserHistory();

export const App = () => 
  <DocumentTitle title={config.site.title}>
    <Router history={history}>
      <>
        <ScrollToTop history={history} />
        <Sidebar />
        {config.menu.tags.map((tag:Tag) =>
          <Route key={`tag/${tag}`} path={`/tag/${tag}`} exact component={tagPage(tag)} />
        )}
        {config.pages.map((page:IPage) =>
          <Route key={page.url} path={page.url} exact component={fullPage(page)} />
        )}
        <Footer />
      </>
    </Router>
  </DocumentTitle>;

export default App;
