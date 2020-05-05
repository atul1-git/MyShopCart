import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './Shared/css/header.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers/store';
import { configureFakeBackend } from './_helpers/fake-backend';
configureFakeBackend();

ReactDOM.render(
       <Provider store={store}>
       <App /> 
       </Provider>
       ,document.getElementById("root")
);


serviceWorker.unregister();
