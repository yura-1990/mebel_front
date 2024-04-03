import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./store/store"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css';

/* import App from './App'; */
const App = React.lazy(()=>import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Provider>
    </Router>
  );
    

