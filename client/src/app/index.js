import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components'
import { InsertCust, Home, Services, Terms, Invoices } from '../pages';
import { OrgRecAction } from '../statemt/actions';
import { connect } from 'react-redux';

class App extends React.Component{
    render(props) {
        return (
            <Router>
                <NavBar />
                <Route path='/home/:id' exact component={Home} />
                <Route path='/regis' exact component={InsertCust} />
                <Route path='/servs' exact component={Services} />
                <Route path='/terms' exact component={Terms} />
                <Route path='/invos' exact component={Invoices} />
            </Router>
        );
    }
}

export default connect(null,{OrgRecAction})(App)
