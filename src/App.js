import React, { Component } from 'react';
import Head from './components/head/head';
import Main from './components/menu/menu';

class App extends Component {
  render() {
    return (
      <div>
        <Head></Head>
        <Main></Main>
      </div>
    );
  }
}

export default App;
