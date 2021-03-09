import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Container, Row, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {getTotalBasketCount, getBasketProductsWithCount, getTotalBasketPrice} from '../../store/selectors';
import {removeProductFromBasket} from '../../store/products.actions';
import {bindActionCreators, compose} from "redux";


class Basket extends Component {

    basketEmpty = () => {
        <div>Your shopping cart is empty</div>
    }

    render (){
        const{basketCount, totalPrice, removeProductFromBasket, products} = this.props;

        let basketContent =
            <>
                <Container>
                    <div className="table-responsive basket-content">
                        <div className="table-bordered">
                            <div className="table-heading">
                                <Row>
                                    <div className="col-md-2">Bike photo</div>
                                    <div className="col-md-2">Product Name</div>
                                    <div className="col-md-2">Price per day</div>
                                    <div className="col-md-2">Days to rent</div>
                                    <div className="col-md-2">Total per product</div>
                                    <div className="col-md-2">Delete Product</div>
                                </Row>
                            {products.map((product, index) => (
                                <Row
                                    key={index}
                                >
                                    <div className="col-md-2">
                                <Link to={'single-product/' + product._id}><Image
                                            className="img-thumbnail"
                                            src={product.photo}
                                            alt={product.product_name}
                                            thumbnail
                                        /></Link>
                                    </div>
                                    <div className="col-md-2"><Link to={'single-product/' + product._id}>{product.product_name}</Link></div>
                                    <div className="col-md-2">{product.full_day_rent}€</div>
                                    <div className="col-md-2">{product.days_to_rent}</div>
                                    <div className="col-md-2">{product.full_day_rent * product.days_to_rent}</div>
                                    <div className="col-md-2">
                                        <span onClick={() => {removeProductFromBasket(product._id)}}><i className="fa fa-trash"></i></span>
                                    </div>
                                 </Row>
                                ))}
                                <Row className="table-bottom">
                                    <div className="col-md-6">
                                        <h5>pickup:</h5>
                                        <p className="overtaking">on location of sales office - Delta City</p>
                                    </div>
                                    <div className="col-md-6">
                                        <Row className="total-table">
                                            <div className="col-md-12 caption">
                                                <h5>Total</h5>
                                            </div>
                                            <div className="col-md-8">
                                                Rent amount VAT included
                                            </div>
                                            <div className="col-md-4">
                                                {this.props.totalPrice} €
                                            </div>
                                            <div className="col-md-8">
                                                in Total
                                            </div>
                                            <div className="col-md-4">
                                                {this.props.totalPrice} €
                                            </div>
                                            <div className="col-md-12">
                                                <Link to="/checkout"><div className="btn"><span>Checkout</span></div></Link>
                                            </div>
                                        </Row>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
            </>
        return(
            <Container fluid>
                <Row>
                    <div className="col-md-12">
                        <section className="s-header-title">
                            <div className="container">
                                <h1>Cart</h1>
                                <ul className="breadcrambs">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Cart</li>
                                </ul>
                            </div>
                        </section>
                        {basketCount === 0 &&
                            <Container className="empty">
                                <Link className="continue" to="/bike-rental">Continue booking</Link>
                            <div>Your shopping cart is empty</div></Container>}
                        {basketCount > 0 && basketContent}
                    </div>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = state => ({
    basketCount: getTotalBasketCount(state),
    products: getBasketProductsWithCount(state),
    totalPrice: getTotalBasketPrice(state),
})

const mapDispatchToProps = dispatch => {
    return {
        removeProductFromBasket: bindActionCreators(removeProductFromBasket, dispatch)
    }
}

export default compose (
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(Basket)