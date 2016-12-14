import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import * as productActions from '../../actions/productActions';
import {bindActionCreators} from 'redux';
import ProductsList from './ProductsList';
import Spinner from '../common/Spinner';

/*eslint-disable no-console*/

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.loadProducts();
    }

    render() {
        console.log(this.props.products);
        return (
            <div>
                {this.props.products.items
                    ? <ProductsList products={this.props.products.items}/>
                    : this.props.products.isLoading ? 
                        <Spinner isLoading={this.props.products.isLoading} />
                    : null}
            </div>
        );
    }
}

ProductsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {products: state.products};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);