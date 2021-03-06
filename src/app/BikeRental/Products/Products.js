import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'
import {withRouter} from "react-router";
import {fetchProducts, addProductToBasket, fetchCategories} from '../../../store/products.actions';
import {getBasketProductsWithCount, getProducts, basketProducts} from "../../../store/selectors";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    renderProduct (product, index) {
        const{addProductToBasket} = this.props;
        return (
            <>
                <div className="col-12 col-sm-4 prod-item-col">
                    <div className="product-item">
                        <Link to={'single-product/' + product._id} className="product-img" key={index} ><img src={product.photo} alt={product.product_name}/></Link>
                        <div className="product-item-wrap">
                            <div className="product-item-cover">
                                <div className="price-cover">
                                    <div className="new-price">Rent per day {product.full_day_rent}€</div>
                                </div>
                                <h6 className="prod-title"><Link to={'single-product/' + product._id}>{product.product_name}</Link></h6>
                                <button className="btn" type="button" onClick={() => {addProductToBasket(product._id); }}><span>Add Bike</span></button>
                            </div>
                            <div className="prod-info">
                                <ul className="prod-list">
                                    <li>Class: <span>{product.category}</span></li>
                                    <li>Number of speeds: <span>{product.number_of_speeds}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div col-md-12>
                </div>
            </>
        )
    }

    render () {
        const {products} = this.props;
        return (
            <Row>
                {products.map((product, index) => this.renderProduct(product, index))}
            </Row>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    products: getProducts(state, ownProps),
    basketProducts: getBasketProductsWithCount(state)
})

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: bindActionCreators(fetchProducts, dispatch),
        addProductToBasket: bindActionCreators(addProductToBasket, dispatch),
        fetchCategories: bindActionCreators(fetchCategories, dispatch)
    }
}

export default compose (
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(Products)