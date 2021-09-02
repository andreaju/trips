import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import Routes from './routes';
import Header from './components/Header';

import store from './store'

function App() {

  return (

    <div>
      <h1>Trips Application</h1>
      <Provider store={store}>
          <BrowserRouter>
              <Header/>
              <Routes/>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
