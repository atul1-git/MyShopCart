import React from 'react';
import {connect} from 'react-redux';
import ProductDetailComponent from '../../_components/ProductDetail/ProductDetail';
import ProductSlider from "../../_components/ProductSlider/ProductSlider";
import { Header} from '../../_components/HeaderComponent';
import Footer from '../../_components/FooterComponent'; 
const ProductDetail = (props) => {

    console.log(props);

    return (
        <div>
            <Header/>
        <div className="container" style={{padding: '0rem 0'}}>
            <div className="card">
                <div className="row">
                    <ProductSlider images={props.product.images}/>
                    <ProductDetailComponent product={props.product}/>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

const mapStateToProps = (state, props) =>  {

    const product = state.shop.products.find(product => product.id === +props.match.params.id);

    return {
        product
    }
};



export default connect(mapStateToProps, null)(ProductDetail);
