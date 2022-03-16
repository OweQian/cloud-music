import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import { renderRoutes } from 'react-router-config'
import routes from './routes/index'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
