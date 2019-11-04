/*
* This is main App component which provides access
* to Application level state and give it to all its predecesors.
*/
// IMPORT - Plugins //
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// IMPORT - Components //
import store from './appStore/store';
import CanvasWrapper from './components/CanvasWrapper';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Provider store={store}>
                <div id='app_container' className='app'>
                    <CanvasWrapper />
                </div>
            </Provider>

        );
    }
}
export default App;