import React, {Component} from 'react';
import {connect} from "react-redux";
import {Container, Row, Image} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {
    increaseDaysToRent,
    decreaseDaysToRent,
    enterQuantity,
    addProductToBasket
} from "../../../../store/products.actions";

class SingleProduct extends Component {

    render(){
        const [productId] = this.props.match.params.id;
        const products = this.props.products;
        const {basketDaysQuantity, enterQuantity, increaseDaysToRent, decreaseDaysToRent, addProductToBasket} = this.props;

        //console.log(basketDaysQuantity)
        const product = products.products.filter(
            product => parseInt(product._id) === parseInt(productId)
        )

        return(
            <section className="s-single-product">
                <Container>
                    <Row>
                        <div className="col-12 col-md-5">
                            <Image src={product[0].photo} fluid/>
                        </div>
                        <div className="col-12 col-md-7 single-shop-left">
                            <h2 className="title">{product[0].product_name}</h2>
                            <label>Price to rent per day:</label>
                            <div className="single-price">
                                <div className="new-price">{product[0].full_day_rent}€</div>
                            </div>
                            <div className="frame-size">
                                <label>Bike description</label>
                                <p><small>{product[0].bike_description}</small></p>
                            </div>
                            <div className="frame-size">
                                <label>Number of speeds</label>
                                <p><small>{product[0].number_of_speeds}</small></p>
                            </div>
                            <div className="wheel-size">
                                <label>Manufacturer:</label>
                                <p className="active">{product[0].manufacturer}</p>
                            </div>
                            <div className="single-quanity">
                                <label>Days to rent:</label>
                                <span onClick={() => decreaseDaysToRent(product[0]._id)}>-</span>
                                    <input id="quantity"  type="number" onChange={e => {enterQuantity(e.target.value, product[0]._id)}} value={basketDaysQuantity} />
                                <span onClick={() => increaseDaysToRent(product[0]._id)}>+</span>
                            </div>
                            <div className="single-btn-cover">
                                <div className="btn btn-buy-now" onClick={() => {addProductToBasket(product[0]._id  ); }}><span>add</span></div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    basketProductsDaysToRent: state.basket.basketIds,
    basketDaysQuantity: state.basket.basketDaysQuantity
})

const mapDispatchToProps = (dispatch)  => {
    return {
        increaseDaysToRent: bindActionCreators(increaseDaysToRent, dispatch),
        decreaseDaysToRent: bindActionCreators(decreaseDaysToRent, dispatch),
        enterQuantity: bindActionCreators(enterQuantity, dispatch),
        addProductToBasket: bindActionCreators(addProductToBasket, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);