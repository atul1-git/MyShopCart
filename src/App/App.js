import React from 'react';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers/history';
import { alertActions } from '../_actions/alertactions';
import { PrivateRoute } from '../_components/PrivateRoute';
import { LoginPage } from '../LoginPage/LoginPage';
import { HomePage } from '../_components/Home';
import { RegisterPage } from '../_components/Register'
import ProductMain from '../_components/ProductMain';
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import ShoppingCart from "../pages/ShopingCart/ShoppingCart";
import { Header } from '../_components/HeaderComponent';
import Footer from '../_components/FooterComponent';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert, user, users } = this.props;

        return (
            <Router history={history} >

                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/login'} />
                    }} />
                    <Route exact path={'/'} component={HomePage} />
                    <Route path={'/home'} component={HomePage} />
                    <Route path={'/login'} component={LoginPage} />
                    <Route path={'/register'} component={RegisterPage} />
                    <Route exact path={'/products'} component={ProductMain} />
                    <Route exact path={'/products/:id'} component={ProductDetail} />
                    <Route exact path={'/cart'} component={ShoppingCart} />

                    }}/>
                                </Switch>

            </Router>
        );
    }
}

function mapState(state) {
    const { alert, users, authentication } = state;
    const { user } = authentication;

    return { alert, user };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };