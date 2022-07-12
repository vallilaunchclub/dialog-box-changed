import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import setupAxiosInterceptors from "../../Global/interceptor";
import store from '../../Store/index';
import MainRoutes from '../Routes';

setupAxiosInterceptors(store);
console.warn = () => {};

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
