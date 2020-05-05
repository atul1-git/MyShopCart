import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions/useractions';
import { Header} from '../_components/HeaderComponent';
import Footer from '../_components/FooterComponent';
import { Carousel, CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption
  } from 'reactstrap';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <Header/>
               <div className='container'>
                   <div className='row'>
            <div className='col col-md-6'  >
            <Link to='/products' > 
           <img src='../assets/images/home3.png'  style={{height:'400px',width:'100%'}} ></img>
           </Link>
            </div>
           

            <div className='col col-md-6'  >
            <Link to='/home' > 
           <img src='../assets/images/home7.png'  style={{height:'400px',width:'100%'}} ></img>
           </Link>
            </div>


            </div>
               </div>
            <Footer/>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };