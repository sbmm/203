import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'
import * as serviceWorker from './serviceWorker'

const App = (
    <React.Fragment>
        <Routes />
    </React.Fragment>
)

ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();
