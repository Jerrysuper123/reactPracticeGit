import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import app file and access root to index.html
//render one root app.js, you only have root component

//you can render Layout.js or other compoent, it will render. If it renders app.js, then import into app.js
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
