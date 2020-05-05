import React, {Component} from 'react';
import BrandFilter from "../../_components/BrandFilter/BrandFilter";
import OrderFilter from "../../_components/OrderFilter/OrderFilter";

class FilterBar extends Component {
    render() {
        return (
            
                <div className="row">
                    <div className="col-12">
                        <BrandFilter ProductType='Electronics' />
                    </div>
                    <div className="col-12">
                        <OrderFilter/>
                    </div>
                </div>
            
        );
    }
}

export default FilterBar;