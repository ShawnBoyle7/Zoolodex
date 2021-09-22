import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
