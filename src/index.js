import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers';

let store = createStore(todoApp);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Provider store={store}>
     <App />
  </Provider>
  </React.StrictMode>
);
reportWebVitals();