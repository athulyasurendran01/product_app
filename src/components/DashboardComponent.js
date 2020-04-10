import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts, addProduct, removeProduct, fetchSingleProduct } from '../_actions/products';
import ProductCard from './ProductComponent';
import AddProduct from './AddProduct';

import './Dashboard.css'

class DashboardComponent extends React.Component {
    state = { showModal: false };

    async componentDidMount() {
        const { fetchProducts } = this.props;
        await fetchProducts();
    }

    deleteProductHandler = (prodId) => {
        this.props.removeProduct(prodId)
        alert("Product removed successfully")
    }

    editProductHandler = (prodId) => {
        this.props.fetchSingleProduct(prodId)
        this.setState({ showModal: true });
    }

    addProdcuctHandler = (data) => {
        this.setState({ showModal: false });
        this.props.addProduct(data)
        this.props.fetchSingleProduct('')
    }

    render() {
        return (
            <>
                <div className="header-container">
                    Product List
                <button className="add_product_btn" onClick={() => { this.setState({ showModal: true }) }}>
                        Add Product
                </button>
                </div>
                {this.props.products &&
                    <ProductCard {...this.props} deleteHandler={this.deleteProductHandler}
                        editHandler={this.editProductHandler} />
                }
                {this.props.products.length <= 0 &&
                    <h3>Loading.......</h3>
                }
                {this.state.showModal && <AddProduct {...this.props}
                    addProduct={this.addProdcuctHandler}
                    AddProductHandleClose={() => {
                        this.setState({ showModal: false });
                        this.props.fetchSingleProduct('')
                    }} />}
            </>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProducts,
    addProduct: addProduct,
    removeProduct: removeProduct,
    fetchSingleProduct: fetchSingleProduct
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent);

