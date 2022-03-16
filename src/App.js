import React from 'react';
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import { renderRoutes } from 'react-router-config'
import routes from './routes/index'

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
