import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { request } from './api';
import './index.css';
import App from './App';
import ScrollToTop from './components/scrollToTop';
import rootReducer from './reducers';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'

export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <BrowserRouter> */}
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

unregisterServiceWorker();

// Ping the server
const wakeServer = async () => {
  // Check localStorage for id
  let id = localStorage.getItem('id') || null;
  // If no id then create id
  if (!id)
    id =
      'id' +
      Math.random()
        .toString(16)
        .slice(2) +
      new Date().getTime();

  // Store the id
  localStorage.setItem('id', id);
  try {
    await request({
      method: 'POST',
      endpoint: 'visit',
      data: { visitorId: id },
    });
  } catch (e) {}
};

wakeServer();
