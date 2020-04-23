import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAppsIfNeeded } from '../redux/actions';

import Card from './card';
import SimpleStore from './SimpleStore.js';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAppsIfNeeded());
  }

  render() {
    const { isFetching, apps } = this.props;
    const totalapps = apps.length;
    // console.log("isFetching", isFetching);
    return (
      <>
        {isFetching && totalapps === 0 && <h2>Loading...</h2>}
        {!isFetching && totalapps === 0 && <h2>Empty.</h2>}
        <SimpleStore/>
        <Card apps={apps} totalapps={totalapps} />
      </>
    );
  }
}
function mapStateToProps({ isFetching, apps }) {
  return {
    isFetching,
    apps,
  };
}
export default connect(mapStateToProps)(App);
