import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginContainer from './components/LoginContainer';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <h1>React Redux Template</h1>
                <LoginContainer />
            </div>
        </Provider>
    );
}

export default App;
