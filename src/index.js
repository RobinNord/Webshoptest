/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const store = configureStore();
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory} routes={routes}/>
        </MuiThemeProvider>
    </Provider>, 
document.getElementById('app'));