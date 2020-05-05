import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from '../_components/HeaderComponent';
import Footer from '../_components/FooterComponent';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import {LoginPage } from '../LoginPage/LoginPage';
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { };
        
    }

    render() {
        const HomePage = () => {
            return (
                <div className='container' >
                    <div className='row' >
                    <h1>Welcome Atul ! enjoy your shopping</h1>
                    
                    </div>
                    </div>
            );
        }
       
        return (

            <div>
                <Header />
                <Switch>
                    <Route path='/' component={HomePage} />
                    <Route path='/login' component={<LoginPage/>} />
                </Switch>
              
                <Footer />
            </div>
        )


    }


}

export default Main
