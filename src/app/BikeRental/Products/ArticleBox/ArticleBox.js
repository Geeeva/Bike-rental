import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ArticleBox extends Component {


    render(){

        return(
            <div className="col-12 col-sm-4 prod-item-col">
                <div className="product-item">
                    <Link to={'single-product/' + this.props.product._id} className="product-img" product={this.props.product}><img src={this.props.product.photo} alt={this.props.product.product_name}/></Link>
                        <div className="product-item-wrap">
                            <div className="product-item-cover">
                                <div className="price-cover">
                                    <div className="new-price">{this.props.product.full_day_rent}€</div>
                                </div>
                                <h6 className="prod-title"><Link to={'single-product/' + this.props.product._id}>{this.props.product.product_name}</Link></h6>
                                <div className="btn" onClick={() => this.addProductToBasket(this.props.product._id)}><span>Add</span></div>
                            </div>
                            <div className="prod-info">
                                <ul className="prod-list">
                                    <li>Class: <span>{this.props.product.category}</span></li>
                                    <li>Number of speeds: <span>{this.props.product.number_of_speeds}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}


export default ArticleBox;