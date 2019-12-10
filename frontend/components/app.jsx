import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter, Route } from 'react-router-dom';
import Navbar from './navbar';
import Splashpage from './splashpage'

const App = () =>(
    <div>
        inside app jsx
        <Navbar />
        <Route exact path="/" component={Splashpage} />
        
    </div>
)

export default App