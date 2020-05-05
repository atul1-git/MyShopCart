import React,{Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron }  from 'reactstrap';
import {Link, NavLink, withRouter } from 'react-router-dom';
import {userActions} from '../_actions/useractions';
import { connect } from 'react-redux';
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleNav2 = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isNavOpen2: false,

        };
      }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleNav2() {
        this.setState({
          isNavOpen2: !this.state.isNavOpen2
        });
      }
      componentDidMount() {
        this.props.getUsers();
    }
    render() {
      const { user, users ,cartLength} = this.props;
        return(
          <React.Fragment>
          <div className='' >
          <div className='row bg-warning ' >
             <div className='col col-md-3 imgHeader'>
               <Link to='/home'>
             <img src ='../assets/images/logo3.png' height="30" width="41" alt ='MyShopCart' />
             </Link>
               </div>
               <div className='col col-md-3 '>
               <input type='text' className='form-control input-lg' ></input>
               
               </div>
               <div className='col col-md-3  '>
                 <Link to='/cart'>
               <i className="fa fa-shopping-cart mr-6"
                                  aria-hidden="true" />Cart { cartLength ? `(${cartLength})`: ''}
                                  </Link>
              </div>
               <div className='col col-md-3'>
               <p>Welcome {user.firstName} ! <Link to="/login">Logout</Link> </p> 
            
               </div>

          </div>
          </div>
          <div className='' > 
          <div className='row' >
            <div className='col col-md-12' >
          <Jumbotron style={{padding:'0px'}} className='Jumbotronn'>
                  
                  <Navbar   expand="md sm">
                      <div className="container">
                          <NavbarToggler onClick={this.toggleNav2} />
                       
                          <Collapse isOpen={this.state.isNavOpen2} navbar>
                              <Nav navbar>
                              <NavItem>
                                  <NavLink className="nav-link"  to='/products'><span 
                                    className="fa fa-mobile fa-lg"></span> Electronics
                                    </NavLink>
                              </NavItem>
  
                              <NavItem>
                                  <NavLink className="nav-link"  to='/home'><span 
                                    className="fa fa-male fa-lg"></span> Men
                                    </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link"  to='/home'><span 
                                    className="fa fa-female fa-lg"></span> Women
                                    </NavLink>
                              </NavItem>
  
                              <NavItem>
                                  <NavLink className="nav-link"  to='/home'><span 
                                    className="fa fa-child fa-lg"></span> Kids {'&'} BAby
                                    </NavLink>
                              </NavItem>
                              
                             
                              </Nav>
                            
                          </Collapse>
                      </div>
                  </Navbar>
                 
                  </Jumbotron>
                  </div>
              </div>
              </div>
           </React.Fragment>
        );
    }
}


function mapStateToProps(state) {
 
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users,cartLength: state.shop.cart.length };
}

const actionCreators = {
  getUsers: userActions.getAll,
  
}

const connectedHomePage = connect(mapStateToProps, actionCreators)(Header);
export { connectedHomePage as Header };