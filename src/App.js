import React from 'react';
import {Globalstyle} from'./style.js';
import {GlobalFont} from './statics/iconfont/iconfont'
import Header from './common/header'
function App() {
  return (
    <div className="App">
      <Globalstyle />
      <GlobalFont />
      <Header></Header>
    </div>
  );
}

export default App;
