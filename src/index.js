import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducer from './reducers/index';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
)