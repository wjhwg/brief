import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index';
import {Globalstyle} from'./style.js';
import {GlobalFont} from './statics/iconfont/iconfont'
import Header from './common/header'
function App() {
  return (
    <div className="App">
      <Globalstyle />
      <GlobalFont />
      <Provider store={store}>
        <Header></Header>
      </Provider>
    </div>
  );
}

export default App;
