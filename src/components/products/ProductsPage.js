import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import spinner from '../common/Spinner';
import * as productActions from '../../actions/productActions';
import {bindActionCreators} from 'redux';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: null};
    }

    componentDidMount() {
        this.props.startLoadingProducts();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({products: nextProps});
    }

    render() {
        return (
            <div>
                {this.state.products
                    ? <h1>HEJ</h1>
                    : <h1>HEJDÅ</h1>}
            </div>
        )
    }

}

ProductsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    startLoadingProducts: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {products: state.products};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        startLoadingProducts: () => {
            dispatch(productActions.loadProducts());
        },
        actions: bindActionCreators(productActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);