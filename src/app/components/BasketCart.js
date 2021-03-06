import {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getTotalBasketCount, getTotalBasketPrice} from '../../store/selectors';
import {bindActionCreators} from "redux";
import {cleanBasket} from "../../store/products.actions";

class BasketCart extends Component{

render(){
    const {totalBasketCount, totalBasketPrice, cleanBasket} = this.props;
    let basketStatus;

    if(totalBasketCount === 0)
        basketStatus = <p className="not-product">Your cart is empty</p>
     else
        basketStatus =
            <>
                <p className="products"><span className="basket-count">{totalBasketCount}</span> product(s) in the cart</p>

            </>

    return(
        <>
            <li className="widget wiget-cart">
                <h5 className="title">Cart</h5>
                    {basketStatus}
            </li>

            {totalBasketCount > 0 &&
                <>
                    <li><Link className="to-basket" to="/basket">To basket</Link></li>
                    <li className="clean-basket">
                        <div className="btn" onClick={() => {cleanBasket()}}><span>Clean basket</span></div>
                    </li>
                </>
            }
        </>
        )
    }
}

const mapStateToProps = state => ({
    totalBasketCount: getTotalBasketCount(state),
    totalBasketPrice: getTotalBasketPrice(state)
})

const mapDispatchToProps = dispatch => {
    return {
        cleanBasket: bindActionCreators(cleanBasket, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketCart);