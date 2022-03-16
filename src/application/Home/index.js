import React from 'react';
import { renderRoutes } from "react-router-config";
const Home = props => {
  const { route } = props;
  return (
    <>
      <div>home</div>
      { renderRoutes (route.routes) }
    </>
  )
}

export default React.memo(Home)