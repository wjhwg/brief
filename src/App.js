import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index';
import {Globalstyle} from'./style.js';
import {GlobalFont} from './statics/iconfont/iconfont';
import Header from './common/header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home/index';
import Detail from './pages/detail/index';
function App() {
  return (
    <div className="App">
      <Globalstyle />
      <GlobalFont />
      <Provider store={store}>
        <div>
        <Header></Header>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
        </Router>
        </div>
      </Provider>
    </div>
  );
}

export default App;
