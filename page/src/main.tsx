import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './estilos/tailwind.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CookieConfig } from './CookieConfig';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CookieConfig>
        <App />
      </CookieConfig>
    </Provider>
  </React.StrictMode>,
)
