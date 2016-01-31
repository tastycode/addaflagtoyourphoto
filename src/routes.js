/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import ChoosePage from './components/ChoosePage';
import LoginPage from './components/LoginPage';
import PreviewPage from './components/PreviewPage';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/choose', async () => <ChoosePage/>);
  on('/preview/:code/:name', async (req) => {
    const {code, name} = req.params;
    const flag = {code, name}
    return <PreviewPage flag={flag}/>
  });

  on('/', async () => <LoginPage />);
});

export default router;
