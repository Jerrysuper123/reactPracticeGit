
import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';

// why there is no return key word
const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;