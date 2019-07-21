import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Layout from '../views/Layout.jsx';
import SubRouter from './SubRouter';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Layout path="/">
          <SubRouter />
        </Layout>
      </Router>
    );
  }
}

export default AppRouter;
