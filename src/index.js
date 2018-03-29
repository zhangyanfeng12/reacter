import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AppBar from './AppBar';
// import ClippedDrawer from './ClippedDrawer';
import tileData from './tileData'
import PersistentDrawer from './PersistentDrawer'

ReactDOM.render(<div>
    {/* <AppBar /> */}
    {/* <ClippedDrawer /> */}
    <tileData />
    <PersistentDrawer />
</div>
, document.getElementById('root'));

