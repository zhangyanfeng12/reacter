import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppBar from './AppBar';
import ClippedDrawer from './ClippedDrawer';
import tileData from './tileData'

ReactDOM.render(<div>
    <AppBar />
    <ClippedDrawer />
    <tileData />
</div>
, document.getElementById('root'));

