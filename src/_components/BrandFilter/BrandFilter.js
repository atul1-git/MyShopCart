import React, {Component} from 'react';
import {connect} from 'react-redux';
import './BrandFilter.scss';
import {brands} from "../../data/brands";
import {MenClothing_brands} from "../../data/brands";
import {addBrandToFilter, removeBrandFromFilter} from "../../_actions";


const BrandFilter = (props) => {
    const ProductBrand=props.ProductType;
    let selectedBrands=null;
   
    if(ProductBrand=='Electronics')
    { 
        selectedBrands=brands;
    }
    else if(ProductBrand=='Men')
    {
        selectedBrands=MenClothing_brands;
    }
    const {dispatch, brandItemsCount} = props;
    const handleSelectBox = (e) => {
        const name = e.target.name;
        const value = e.target.checked;

        if(e.target.checked) {
            dispatch(addBrandToFilter(name));
        } else {
            dispatch(removeBrandFromFilter(name));
        }
    };


        return (
             

            <div className="card mb-3">
                <div className="card-header">
                    <h3>Brands</h3>
                </div>
                <ul className="list-group flex-row flex-wrap">
                    {selectedBrands.map(brand => (
                        <li className="list-group-item flex-50">
                            <label className="custom-checkbox text-capitalize"> {brand} ({brandItemsCount[brand]})
                                <input type="checkbox"
                                       name={brand}
                                       className="custom-checkbox__input" onInput={handleSelectBox}/>
                                <span className="custom-checkbox__span"></span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        );

};

const mapStateToProps = (state) => {

    const brandItemsCount = {};

    state.shop.products.forEach(p => {
        brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });


    return {
        brandItemsCount
    }

};

export default connect(mapStateToProps)(BrandFilter);