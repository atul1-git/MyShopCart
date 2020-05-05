import React from 'react';
import { Header} from '../_components/HeaderComponent';
import Footer from '../_components/FooterComponent';
import FilterBar from "../containers/FilterBar/FilterBar";
import ProductList from "../containers/ProductList/ProductList";
const ProductMain = () => {
    return (
        <React.Fragment>
           
                    <Header/>
                    <div className='container'>
                        <div className='row'>
                        <div className='col col-md-3'>
                        <FilterBar/>
                        </div>
                        <div className='col col-md-9'>
                        <ProductList/>
                        </div>
                        </div>
                    </div>
                   <Footer/>
               
        </React.Fragment>
    );
};


export default ProductMain